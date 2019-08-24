/// <reference path="../../types/mousetrap.d.ts" />
/// <reference path="../../types/swal2.d.ts" />

import { Config, MetaConfig, MetaConfigType } from '../module'
import { Module } from '../module'
import { VERSION_HASH } from '../definitions'
import { Utils } from '../utils'
import { Panel } from './panel'
import { SETTINGS_BUTTON_TAG } from './constants'

export const CONTROL_PANEL_MODULE = new Module({
	moduleName: 'CONTROL_PANEL',
	title: 'Panel de control',
	description: 'Panel de control para administrar módulos',
	author: 'pytness',
	version: '0.1',

	runat: 'load',

	match: ['*']
});

const panel = new Panel(CONTROL_PANEL_MODULE);

CONTROL_PANEL_MODULE.config.getMeta('ENABLED')
	.flags.unset('CONFIGURABLE');

CONTROL_PANEL_MODULE.config.define('TOGGLE_COLOR', <MetaConfigType>{
	title: 'Toogle color',
	defaultValue: '#b4d455',
	flags: ['CONFIGURABLE'],

	getter: function() {
		return Config.HTML.COLOR.GETTER(this.value);
	},

	parser: function(el: HTMLElement) {
		let value = Config.HTML.COLOR.PARSER(el);

		CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
			'background-color': value
		});

		return value;
	},

	events: {
		HTMLAppended: function({ }, html: HTMLElement) {
			$(html).find('input')[0].addEventListener('input', function({ }) {
				CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
					'background-color': (<HTMLInputElement>this).value
				});
			});
		},

		reset: function() {
			CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
				'background-color': this.defaultValue
			});
		},

		cancel: function() {
			CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
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
			$(html).find('input')[0].addEventListener('input', function({ }) {
				selfConfig.value = (<HTMLInputElement>this).checked;
				panel.showModuleConfigDialog(selfConfig.hostModule.name);
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

CONTROL_PANEL_MODULE.onload = function() {
	if (Utils.isMobileVersion) {
		const gearTag = $(SETTINGS_BUTTON_TAG);

		$('.mobilebuttonslide').before(gearTag);

		gearTag.on('click', function(e: Event) {
			if (!Swal.isVisible()) {
				e.preventDefault();
				panel.showModuleListDialog();
			}
		})

	} else {
		Mousetrap.bind('esc', function(e: Event) {
			if (!Swal.isVisible()) {
				e.preventDefault();
				panel.showModuleListDialog();
			}
		});
	}

	CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
		'background-color': CONTROL_PANEL_MODULE.config.get('TOGGLE_COLOR')
	});

	const HASH_BLOCK = VERSION_HASH.slice(0, 8);

	if (!Utils.isMobileVersion) {
		$('[id="AutoNumber1"] tbody tr td')[1]
			.innerText = `Version hash: [${HASH_BLOCK}]`;
	}
}
