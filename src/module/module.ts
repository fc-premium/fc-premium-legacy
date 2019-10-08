import { Config } from './config'
import { CSSHandler } from './css-handler'
import { Debug } from './debug'
import { LocalStorage } from './storage'
import { FlagHandler } from './flaghandler'
import { ModuleHandler } from '../module-handler'
import { GLOBAL_ENTRY_NAME } from '../definitions'

export interface ModuleParameters {
	moduleName: string;
	title: string;
	description: string;
	author: string;
	version: string;
	match: Array<RegExp | string>;
	require?: Array<string>;
	preload?: Array<string>;
	runat?: string;
	hasMobileSupport?: boolean;
	flags?: Array<string>;
	onload?: Function;
	onunload?: Function;
};

interface ModuleInfo {
	title: string;
	description: string;
	author: string;
	version: string;
};

export class Module {

	public readonly name: string;
	public readonly info: ModuleInfo;

	public readonly match: Array<RegExp | string>;
	public readonly require: Array<string>;
	public readonly preload: Array<string>;
	public readonly runat: string;
	public readonly flags: FlagHandler;

	public readonly hasMobileSupport: boolean;

	public readonly debug: Debug = new Debug(this);
	public readonly storage: LocalStorage = new LocalStorage(this);
	public readonly config: Config = new Config(this);
	public readonly styles: CSSHandler = new CSSHandler(this);

	public onload: Function;
	public onunload: Function;

	public loaded: boolean;

	public constructor(data: ModuleParameters) {

		// const validator = new Vasdsdflidator;

		this.name = data.moduleName;

		this.info = Object.freeze({
			title: data.title,
			description: data.description,
			author: data.author,
			version: data.version
		});

		this.require = data.require instanceof Array ?
			data.require : [];

		this.preload = data.preload instanceof Array ?
			data.preload : [];

		this.hasMobileSupport = typeof data.hasMobileSupport === 'boolean' ?
			data.hasMobileSupport : false;

		Object.freeze(this.require);
		Object.freeze(this.preload);

		// this.match = data.match;
		if (!(data.match instanceof Array) || data.match.length === 0)
			throw 'URL matches must be a non-empty array';

		this.flags = new FlagHandler(data.flags instanceof Array ?
			data.flags : []);

		this.runat = data.runat;

		// Parse to regular expression
		data.match.forEach((match, i) => {
			if (typeof match === 'string') {
				('-._~:/?#[]@!$&\'()+,;=').split('').forEach(c => {
					match = (<string>match).replace(c, '\\' + c);
				});

				data.match[i] = new RegExp('^' + match.replace('*', '.*') + '$');

			} else if (!(match instanceof RegExp)) {
				throw 'Url match must be either a string or a RegExp';
			}
		});

		this.match = data.match
		Object.freeze(this.match);

		this.onload = data.onload instanceof Function ?
			data.onload : () => { };
		this.onunload = data.onunload instanceof Function ?
			data.onunload : () => { };

		this.loaded = false;

		if (!Object.keys(GM_getValue(GLOBAL_ENTRY_NAME)).includes(this.name)) {
			let gentry = GM_getValue(GLOBAL_ENTRY_NAME);
			gentry[this.name] = {};
			GM_setValue(GLOBAL_ENTRY_NAME, gentry)
		}

	}

	public load(loadConfig: boolean = true): boolean {

		let self = this;

		if (loadConfig)
			this.config.loadSavedConfig();

		// check required modules are loaded
		let canExecute = this.require.every(requiredModule => {
			let reqModule: Module = ModuleHandler.get(requiredModule);

			if (!reqModule.loaded) {
				self.debug.error(`Required module "${requiredModule}" not loaded or enabled`);
			}

			return reqModule.loaded;
		});

		if (!self.loaded && self.config.get('ENABLED') && canExecute) {

			canExecute = !self.match.every(match =>
				!(<RegExp>match).test(location.pathname + location.search)
			);

			if (canExecute) {

				let preloadMap = this.preload.map(src => {
					return new Promise(function(resolve) {
						let script = $('<script>');

						$('html > head').append(script);

						script[0].onload = function() {
							resolve();
						};

						script.attr('src', src);
					});
				});

				Promise.all(preloadMap).then(function() {

					// If document loading and run at load
					if (document.readyState === "loading" && self.runat === 'load') {
						window.addEventListener('DOMContentLoaded', function() {
							self.onload()
						});
					} else {
						self.onload();
					}
				});

				this.loaded = true;
			}
		}

		return canExecute;
	}

	public unload(): void {
		if (this.loaded) {
			this.onunload();
			this.loaded = false;
		}
	}
}
