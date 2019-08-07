/// <reference path="../types/mousetrap.d.ts" />
/// <reference path="../types/swal2.d.ts" />

import { Utils } from './utils'
import { Module } from './module.class'
import { ModuleHandler } from './modulehandler.class'
import { Config, MetaConfig, MetaConfigType } from './config.class'
import { VERSION_HASH } from './definitions'

const $ = jQuery;

const GEAR_URL = 'https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gear.svg';
const GEAR_IMAGE_TAG = `<i class="material-icons config-button" height="16px">settings</i>`;
const RESET_BUTTON_TAG = `<span class="reset-button" title="Reset value"></span>`;
let moduleListTable = '<table class="module_menu"><tr class="title"><td>Name</td><td>Version</td><td>Enabled</td></tr></table>';

const backButton = '<span class="swal2-close backbutton"></span>';

const MODULE = new Module({
	moduleName: 'CONTROL_PANEL',
	title: 'Panel de control',
	description: 'Panel de control para administrar módulos',
	author: 'pytness',
	version: '0.1',

	runat: 'load',

	match: ['*']
});

MODULE.config.getMeta('ENABLED')
	.flags.unset('CONFIGURABLE');

MODULE.config.define('TOGGLE_COLOR', <MetaConfigType>{
	title: 'Toogle color',
	defaultValue: '#b4d455',
	flags: ['CONFIGURABLE'],

	getter: function() {
		return Config.HTML.COLOR.GETTER(this.value);
	},

	parser: function(el: HTMLElement) {
		let value = Config.HTML.COLOR.PARSER(el);

		MODULE.styles.set('input.toogle:checked+label', {
			'background-color': value
		});

		return value;
	},

	events: {
		HTMLAppended: function({ }, html: HTMLElement) {
			$(html).find('input')[0].addEventListener('input', function({ }) {
				MODULE.styles.set('input.toogle:checked+label', {
					'background-color': (<HTMLInputElement>this).value
				});
			});
		},

		reset: function() {
			MODULE.styles.set('input.toogle:checked+label', {
				'background-color': this.defaultValue
			});
		},

		cancel: function() {
			MODULE.styles.set('input.toogle:checked+label', {
				'background-color': this.value
			});
		}
	}
}).define('DEV_MODE', <MetaConfigType>{
	section: 'Dev',
	title: 'Dev mode',
	defaultValue: false,
	flags: ['CONFIGURABLE'],

	getter: function() {
		return Config.HTML.SWITCH.GETTER(this.value);
	},

	parser: function(el: HTMLElement) {
		return Config.HTML.SWITCH.PARSER(el);
	},

	events: {
		HTMLAppended: function(selfConfig: MetaConfig, html: HTMLElement) {
			console.log(2);
			$(html).find('input')[0].addEventListener('input', function({ }) {
				console.log(1);
				selfConfig.value = (<HTMLInputElement>this).checked;
				showModuleConfigDialog(selfConfig.hostModule.moduleName);
			});

		}
	}

}).hook('MODULE_HANDLER', 'RESOURCES', 'RESOURCES', <MetaConfigType>{
	title: 'User resources',
	flags: ['CONFIGURABLE'],

	getter: function() {
		let value = this.value.join('\n');

		value += value === '' ? '' : '\n';

		return Config.HTML.TEXTAREA.GETTER(value, {
			cols: 80,
			rows: 20
		});
	},

	parser: function(el: HTMLElement) {
		return Config.HTML.TEXTAREA.PARSER(el)
			.split('\n')
			.map((l: string) => l.trim())
			.filter((l: string) => l !== '');
	}
});

MODULE.onload = function() {

	// window.addEventListener('load', function () {
	if (Utils.isMobileVersion) {
		const gearTag = $(GEAR_IMAGE_TAG);
		gearTag.attr('height', 24);

		$('.mobilebuttonslide').before(gearTag);

		gearTag.on('click', function(e: Event) {
			if (!Swal.isVisible()) {
				e.preventDefault();
				showModuleListDialog();
			}
		})

	} else {
		Mousetrap.bind('esc', function(e) {
			if (!Swal.isVisible()) {
				e.preventDefault();
				showModuleListDialog();
			}
		});
	}

	MODULE.styles.set('input.toogle:checked+label', {
		'background-color': MODULE.config.get('TOGGLE_COLOR')
	});

	const HASH_BLOCK = VERSION_HASH.slice(0, 8);

	if (!Utils.isMobileVersion) {
		$('[id="AutoNumber1"] tbody tr td')[1]
			.innerText = `Version hash: [${HASH_BLOCK}]`;
	}
	// });
}


function saveConfigDialog(modal: SweetAlertType) {
	let moduleName = $(modal).find('#swal2-title')
		.attr('moduleName');

	let module = ModuleHandler.get(moduleName);

	$(modal).find('tr.section, tr.section+tr').each(({ }, tr) => {

		let tds = $(tr).find('td').toArray();

		if (tds.length > 2)
			tds.shift();

		let key = tds[0].getAttribute('key');

		const meta = module.config.getMeta(key);

		if (meta.flags.isset('WIDGET'))
			return;

		module.config.set(key,
			meta.parseHTML($(tds[1]))
		);
	});
}

async function showModuleConfigDialog(moduleName: string): Promise<void> {
	let module = ModuleHandler.get(moduleName);
	// const CONFIG_MODE = MODULE.config.get('CONFIG_MODE');

	let html = $('<div>');

	let table = $('<table class="module_menu config_tab"><tr class="title"><td>Section</td><td>Key</td><td>Value</td></tr></table>');

	let keys = module.config.keys();

	// Remove ENABLED key
	keys.splice(keys.indexOf('ENABLED'), 1);

	let sectionsMap: Map<string, Array<string>> = new Map();

	keys.forEach((key: string) => {
		const section = module.config.getMeta(key).section;

		if (!sectionsMap.has(section))
			sectionsMap.set(section, []);

		sectionsMap.get(section)
			.push(key);
	});

	// Transform sections to an array and move 'Debug' section to the last position
	let sectionsArray = (function() {

		const DEBUG_SECTION_NAME = 'Debug';

		const DEBUG_SECTION = sectionsMap.get(DEBUG_SECTION_NAME);
		sectionsMap.delete(DEBUG_SECTION_NAME);

		let _ = Array.from(sectionsMap.entries());

		if (MODULE.config.get('DEV_MODE'))
			_.push([DEBUG_SECTION_NAME, DEBUG_SECTION]);

		return _;
	})();

	sectionsArray.forEach(([section, keys]) => {

		keys.forEach((key, i) => {
			let metaConfig = module.config.getMeta(key);

			if (metaConfig !== undefined && (metaConfig.flags.isset('CONFIGURABLE') || metaConfig.flags.isset('WIDGET'))) {

				let tr = $(`<tr><td key="${key}"><span ctitle></span><span reset_tag></span></td><td cvalue></td></tr>`);


				tr.find(`[ctitle]`).html(metaConfig.title);

				if (metaConfig.description !== undefined)
					tr.find(`[key="${key}"]`).attr('title', metaConfig.description);

				if (!metaConfig.flags.isset('WIDGET'))
					tr.find(`[reset_tag]`).html(RESET_BUTTON_TAG);

				let htmlElement = metaConfig.getHTML();

				$(tr.find('td[cvalue]')[0]).append(htmlElement);
				table.append(tr);

				if (i === 0) {
					tr.addClass('section');

					$(tr.find('td')[0])
						.before(`<td rowspan="${keys.length}">${section}</td>`);
				}
			}
		});
	});

	html.append(table);

	let modal = null;

	return Swal.fire({
		title: module.info.title,
		html: html,
		heightAuto: false,
		showConfirmButton: true,
		showCancelButton: true,
		reverseButtons: true,
		cancelButtonColor: '#E03A3A',
		animation: false,
		customClass: 'with-max-height swal-wide',

		onOpen: function(_modal) {

			modal = _modal;

			modal.focus();

			$(modal).find('.swal2-title')
				.attr('moduleName', moduleName);

			$(modal).find('.swal2-title')
				.append($(`${backButton}`));

			$(modal).find('.swal2-title').css({
				'left': '32px'
			});

			$(modal).on('click', '.swal2-close.backbutton', function() {
				saveConfigDialog(modal);
				Swal.close();

				showModuleListDialog();
			});

			// Add user events
			module.config.keys().forEach((key: string) => {

				let config = module.config.getMeta(key);
				let valueHTML = $(modal).find(`tr:has(td[key="${key}"]) td[cvalue]`)[0];

				if (valueHTML === undefined)
					return;

				config.dispatchEvent('HTMLAppended', valueHTML);

				if (!config.flags.isset('WIDGET')) {

					let resetButton = $(modal).find(`td[key="${key}"] span.reset-button`)[0];

					resetButton.addEventListener('click', function() {
						module.config.reset(key, false);

						config.dispatchEvent('reset');

						let html = $(valueHTML);

						// remove all children
						html.children().remove();

						// Update value
						html.append(module.config.getMeta(key).getHTML());
						config.dispatchEvent('HTMLAppended', valueHTML);
					});
				}
			})
		},

		preConfirm: () => {
			saveConfigDialog(modal);
		},
	}).then(result => {
		// If user canceled
		if (result.dismiss !== undefined) {

			module.config.loadSavedConfig();

			module.config.keys().forEach((key: string) =>
				module.config.getMeta(key).dispatchEvent('cancel')
			);
		}
	});;
}

function showModuleListDialog() {

	let tempTable = $(moduleListTable);

	const sortedModuleList = ModuleHandler.keys()
		.sort((moduleKeyA: string, moduleKeyB: string) => {
			const moduleTitleA: string = ModuleHandler.get(moduleKeyA).info.title;
			const moduleTitleB: string = ModuleHandler.get(moduleKeyB).info.title;

			return moduleTitleA.localeCompare(moduleTitleB);
		});

	// Remove CONTROL_PANEL and MODULE_HANDLER
	sortedModuleList.splice(sortedModuleList.indexOf('CONTROL_PANEL'), 1);
	sortedModuleList.splice(sortedModuleList.indexOf('MODULE_HANDLER'), 1);

	sortedModuleList.forEach((moduleName: string) => {
		let module = ModuleHandler.get(moduleName);

		const html = $(`<tr id='${module.moduleName}'>
				<td><span>${module.info.title}</span></td>
				<td>${module.info.version}</td>
				<td></td>
			</tr>`);

		$(html.find('td')[2]).append(
			module.config.getMeta('ENABLED')
				.getHTML()
		);

		html.find('td')[0].setAttribute('title', module.info.description);

		tempTable.append(html);
	});

	return Swal.fire({
		title: 'Config panel',
		html: tempTable,
		heightAuto: false,
		showConfirmButton: false,
		showCloseButton: true,
		animation: false,
		customClass: 'with-max-height',

		onOpen: (modal) => {
			modal.focus();

			// Add config button

			let gearTag = $(GEAR_IMAGE_TAG);
			gearTag.attr('height', '32px');

			$(modal).find('.swal2-close')
				.before(gearTag);

			gearTag.on('click', () =>
				showModuleConfigDialog('CONTROL_PANEL')
			);

			// Add event onclick to open module config
			$(modal).find('tr').each(({ }, tr) => {
				let span = $(tr).find('span')[0];
				if (span !== undefined) {
					span.addEventListener('click', function() {
						showModuleConfigDialog(tr.id)
					});
				}
			});

			// Add enabled / disabled event to switches
			ModuleHandler.keys().forEach((moduleName: string) => {

				const td = $($(modal).find(`tr[id="${moduleName}"] td`)[2]);

				if (td === undefined)
					return;

				const module = ModuleHandler.get(moduleName);
				const config = module.config.getMeta('ENABLED');

				td.find('input').on('change', function() {
					let enabled = config.parseHTML(td);

					module.config.set('ENABLED', enabled);
				});
			});
		}
	});
}

export const CONTROL_PANEL_MODULE = MODULE;
