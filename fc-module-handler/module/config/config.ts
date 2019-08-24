import { MetaConfig, MetaConfigType } from './meta-config'
import { Hook } from './hook'

import { Module } from '../module'
import { ModuleHandler } from '../../module-handler'

export class Config {

	public hostModule: Module;
	private __config: Map<string, any> = new Map();

	static DEFAULT_CONFIG: Array<[string, MetaConfigType]>;
	static HTML: {
		[key: string]: {
			GETTER: any;
			PARSER?: any;
		}
	};

	constructor(module: Module) {
		this.hostModule = module;

		// Predefine default config
		Config.DEFAULT_CONFIG.forEach(([key, value]) =>
			this.define(key, value)
		);
	}

	get(key: string): any {
		return this.__config.has(key) ?
			this.__config.get(key).value : undefined;
	}

	getMeta(key: string): MetaConfig {
		return this.__config.get(key)
	}

	set(key: string, value: any, autosave: boolean = true): this {

		if (this.__config.has(key)) {

			const config = this.__config.get(key);

			// if (conf.__hook) {
			if (config instanceof Hook) {
				config.hook.hostModule.config.set(config.referenceKey, value);
			} else {
				config.value = value;
				this.__config.set(key, config);
			}
		}

		if (autosave === true)
			this.saveConfig();

		// Allow method chaining
		return this;
	}

	/**
	 * Get all defined keys
	 * @return {string[]} Array o keys
	 */
	keys(): string[] {
		return Array.from(this.__config.keys());
	}

	/**
	 * Check if key is defined
	 * @param  key
	 * @return {boolean}
	 */
	has(key: string): boolean {
		return this.__config.has(key)
	}

	/**
	 * Reset a configuration key
	 * @param  key      Key that will be reseted
	 * @param  autosave
	 * @return {this} Allow method chaining
	 */
	reset(key: string, autosave: boolean = true): this {
		let conf = this.__config.get(key);
		conf.value = conf.defaultValue;
		this.__config.set(key, conf);

		if (autosave === true)
			this.saveConfig();

		// Allow method chaining
		return this;
	}

	/**
	 * Resets all configuration keys
	 * @param  {boolean} autosave
	 * @return {this} Allow method chaining
	 */
	resetAll(autosave: boolean = true): this {

		this.keys().forEach(key => {
			this.reset(key, false);
		});

		if (autosave === true)
			this.saveConfig();

		// Allow method chaining
		return this;
	}

	/**
	 * Defines a config key
	 * @param  {string} key
	 * @param  {MetaConfigType} conf [description]
	 * @return {this} Allow method chaining
	 */
	define(key: string, conf: MetaConfigType): this {

		if (this.__config.has(key))
			throw 'Config key already exists';

		this.__config.set(key, new MetaConfig(this.hostModule, key, conf));

		// Allow method chaining
		return this;
	}

	/**
	 * Deletes key from local memory and storage
	 * @param key [description]
	 */
	undefine(key: string): void {
		this.__config.delete(key)

		let storagedConfig = this.hostModule.storage.get('config');
		delete storagedConfig[key];

		this.hostModule.storage.set('config', storagedConfig);
	}

	// Hook others module config
	hook(hookModuleName: string, key: string, newKey: string, config: MetaConfigType): this {

		const hookModule: Module = ModuleHandler.get(hookModuleName);

		if (!hookModule.config.has(key))
			throw 'Config hook key does not exists';

		if (this.__config.has(newKey))
			throw 'Config hook newKey already exists';

		let chook = new Hook(
			this.hostModule,
			hookModule.config.getMeta(key),
			config
		);

		this.__config.set(newKey, chook);

		// Allow method chaining
		return this;
	}

	/**
	 * Loads config saved in storage and generate default config if not found
	 */
	loadSavedConfig(): void {
		let config = this.hostModule.storage.get('config');

		// If config not found
		if (config === undefined) {
			// Generate default config
			this.saveConfig();
		} else {
			// Load current config
			this.importConfig(config);
		}
	}

	/**
	 * Saves current config into storage
	 */
	saveConfig(): void {
		const config = this.hostModule.storage.has('config') ?
			this.hostModule.storage.get('config') : {};

		const currentConfig = this.exportConfig();

		Object.assign(config, currentConfig);

		this.hostModule.storage.set('config', config);
	}

	/**
	 * Loads given config, apllying changes to storage
	 * @param {Object} new_config
	 */
	importConfig(new_config: Object): void {
		Object.keys(new_config).forEach((key) => {

			// set value if key is defined
			if (this.__config.has(key)) {
				this.set(key, new_config[key], false);
			}
		});
	}

	/**
	 * Exports current config to a Object
	 * @return {Object}
	 */
	exportConfig(): Object {
		const config = {};

		this.keys().forEach(key => {
			let conf = this.__config.get(key);

			if (!(conf instanceof Hook) && !conf.flags.isset('WIDGET'))
				config[key] = conf.value;
		});

		return config;
	}
}

Object.defineProperty(Config, 'HTML', {
	get: () => ({
		INPUT: {
			GETTER: (value: any, attr: Object = {}) => {
				let html = $('<input>');
				(<HTMLInputElement>html[0]).value = value;

				Object.entries(attr).forEach(([key, value]) => {
					html[0].setAttribute(key, <string>value);
				});

				return html;
			},

			PARSER: (el: JQuery) => el.find('input').val()
		},

		TEXTAREA: {
			GETTER: (value: any, attr: Object = {}) => {
				let html = $('<textarea>');
				(<HTMLInputElement>html[0]).value = value;

				Object.entries(attr).forEach(([key, value]) => {
					html[0].setAttribute(key, <string>value);
				});

				return html;
			},

			PARSER: (el: JQuery) => el.find('textarea').val()
		},

		SELECT: {
			GETTER: (options: Array<string> = [], selectedIndex: number = 0, attr: Object = {}) => {
				let html = $('<select>');

				selectedIndex = selectedIndex >= options.length ?
					options.length - 1 : selectedIndex;

				options.forEach((option, i) => {
					let opt = $('<option>');
					opt[0].setAttribute('value', i.toString());
					opt[0].innerText = option;
					html.append(opt);
				});

				Object.entries(attr).forEach(([key, value]) => {
					html[0].setAttribute(key, <string>value);
				});

				html.find('option')[selectedIndex % options.length].setAttribute('selected', '');

				return html;
			},

			PARSER: (el: JQuery) =>
				(<HTMLSelectElement>el.find('select')[0]).selectedIndex
		},

		SWITCH: {
			GETTER: (state: boolean = false) => {
				// generate 'unique' id
				let id = performance.now();
				let html = $(`<input class="toogle" type="checkbox" id="${id}"><label class="toogle" for="${id}">Toggle</label>`);

				(<HTMLInputElement>html[0]).checked = state;

				return html;
			},

			PARSER: (el: JQuery) =>
				(<HTMLInputElement>el.find('input')[0]).checked
		},

		HOTKEY: {
			GETTER: (key: string, filterfunc: Function = null) => {
				let input = Config.HTML.INPUT.GETTER(key, {
					type: 'text',
					class: 'fancy-input disabled mousetrap hotkey',
					readonly: true,
				});

				let me = null;

				let readingKeystroke = false;

				function mousetrapKeyReader() {

					let self = this;

					if (me === null) {
						if (typeof Mousetrap !== 'function') {
							var Mousetrap = (a: any) => { this.a = a };
						}

						me = new Mousetrap(this);
					}

					readingKeystroke = true;

					self.classList.remove('disabled');

					this.addEventListener('blur', function() {
						readingKeystroke = false;
						self.classList.add('disabled');

					});

					me.handleKey = function(key: string, mods: Array<string>, ev: KeyboardEvent) {
						ev.preventDefault();
						ev.stopPropagation();

						if (readingKeystroke == true && ev.type == 'keydown' && ev.repeat === false) {
							if (key.length == 1) {

								let hotkey = Array.from(
									new Set([...mods.reverse(), key])
								).join('+').toLowerCase();

								if (typeof filterfunc == 'function') {
									if (filterfunc(key, mods, ev) === false) {
										return false;
									}
								}

								readingKeystroke = false;

								self.classList.add('disabled');
								self.value = hotkey;

							} else if (key === 'esc') {
								readingKeystroke = false;
								self.classList.add('disabled');
							}
						}
					}
				}

				// TODO: use config event handler in the future

				// remove event if exists
				try {
					let event = $.data(document, "events")
						.click.filter((ev: { selector: string }) =>
							ev.selector == '.fancy-input.mousetrap.hotkey'
						)[0];

					$(document).off(event.origType, event.selector, event.handler);

				} catch (e) { }

				$(document).on('click', '.fancy-input.mousetrap.hotkey', mousetrapKeyReader);

				return input;
			},

			PARSER: (el: JQuery) => (<HTMLInputElement>el.find('input')[0]).value
		},

		COLOR: {
			GETTER: (value: any, attr: Object = {}) => {
				let html = $('<input type="color">');
				(<HTMLInputElement>html[0]).value = value;

				Object.entries(attr).forEach(([key, value]) => {
					html[0].setAttribute(key, <string>value);
				});

				return html;
			},

			PARSER: (el: JQuery) => Config.HTML.INPUT.PARSER(el)
		},

		BUTTON: {
			GETTER: (value: any, attr: Object = {}) => {
				let html = $('<input type="button">');
				(<HTMLInputElement>html[0]).value = value;

				Object.entries(attr).forEach(([key, value]) => {
					html[0].setAttribute(key, <string>value);
				});

				return html;
			}
		}
	})
});



Object.defineProperty(Config, 'DEFAULT_CONFIG', {
	get: () => ([
		['ENABLED', {
			title: 'Enabled',
			defaultValue: true,
			flags: ['CONFIGURABLE'],

			getter: function() {
				return Config.HTML.SWITCH.GETTER(this.value);
			},

			parser: function(element: HTMLElement) {
				let lastValue = this.value;
				let value = Config.HTML.SWITCH.PARSER(element);

				if (lastValue !== value) {
					// Pre set value
					this.value = value;

					if (value) {
						this.hostModule.load(false);
					} else {
						this.hostModule.unload();
					}
				}

				return value;
			}
		}],

		['DEBUG_MODE', {
			title: 'Debug Mode',
			defaultValue: false,
			flags: ['CONFIGURABLE'],

			section: 'Debug',

			getter: function() {
				return Config.HTML.SWITCH.GETTER(this.value);
			},

			parser: Config.HTML.SWITCH.PARSER,

			events: {
				HTMLAppended: function(meta: MetaConfig, el: HTMLElement) {
					const toogle = $(el).find('input')[0];

					toogle.addEventListener('change', function() {
						meta.value = (<HTMLInputElement>this).checked
					});
				}
			}
		}],

		['DEBUG_MODULE_NAME', {
			title: 'Show module name',
			value: true,
			defaultValue: true,
		}]
	])
});
