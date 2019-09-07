import {
	SETTINGS_BUTTON_TAG,
	TERMINAL_BUTTON_TAG,
	RESET_BUTTON_TAG,
	moduleListTable,
	backButton
} from './constants'

import { Module } from '../module'
import { ModuleHandler } from '../module-handler'

import { DevTerminal } from './dev-terminal/terminal'

export class Panel {
	private readonly MODULE: Module;

	public constructor(module: Module) {
		this.MODULE = module
	}

	public saveConfigDialog(modal: SweetAlertType): void {
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

	public async showModuleConfigDialog(moduleName: string): Promise<void> {
		const self = this;

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

			if (self.MODULE.config.get('DEV_MODE'))
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
					self.saveConfigDialog(modal);
					Swal.close();

					self.showModuleListDialog();
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
				self.saveConfigDialog(modal);
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

	public async showModuleListDialog(): Promise<SweetAlertResult> {

		const self = this;

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

			const html = $(`<tr id='${module.name}'>
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

				const terminalButton = $(TERMINAL_BUTTON_TAG);

				$(modal).find('.swal2-close')
					.before(terminalButton);

				terminalButton.on('click', () =>
					self.showTerminal()
				);

				const settingsButton = $(SETTINGS_BUTTON_TAG);

				$(modal).find('.swal2-close')
					.before(settingsButton);

				settingsButton.on('click', () =>
					this.showModuleConfigDialog('CONTROL_PANEL')
				);

				// Add event onclick to open module config
				$(modal).find('tr').each(({ }, tr) => {
					let span = $(tr).find('span')[0];
					if (span !== undefined) {
						span.addEventListener('click', function() {
							self.showModuleConfigDialog(tr.id)
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

	public async showTerminal(): Promise<SweetAlertResult> {
		return Swal.fire({
			title: 'Config panel',
			html: '<div id="terminal"></div>',
			heightAuto: false,
			showConfirmButton: false,
			showCloseButton: true,
			animation: false,
			customClass: 'with-max-height swal-wide',

			onOpen: ({ }) => {
				const terminal = new DevTerminal('#terminal');
				terminal.init();
			}
		});
	}
}
