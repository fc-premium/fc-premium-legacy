/// <reference path="../node_modules/@types/jquery/index.d.ts" />

import { Debug } from './debug.class'
import { LocalStorage } from './storage.class'
import { MetaConfigType, Config } from './config.class'
import { FlagHandler } from './flaghandler.class'
import { CSSHandler } from './csshandler.class'
import { Utils } from './utils'
import { FC } from '../fc_api/api'

import { Module, ModuleParameters } from './module.class'
import { GLOBAL_ENTRY_NAME, VERSION_HASH, NO_CACHE_HEADERS } from './definitions'

class ResourceHandler {
	static parseUrl(link: string) {

		let url: URL = null;

		// TODO: Change this
		if (link[0] === '#')
			return null;

		try {
			const priorizate = link[0] === '!';

			if (priorizate)
				link = link.slice(1);

			url = new URL(link);

			const protocol = url.protocol;
			const pathname = url.pathname.replace('//', '/');

			url.protocol = 'https:'
			url.pathname = pathname;

			switch (protocol) {
				case 'rgh:':
					url.hostname = 'raw.githubusercontent.com';
					break;
			}

			// TODO: Allow priorization
			// url.priorizate = priorizate;

		} catch (err) {
			url = null;
		}

		return url;
	}

	static async unpackJSONlinks(resources: Array<string>): Promise<Array<[string | string[], number]>> { // Unpack json links
		// static async unpackJSONlinks(link: string, index: number) { // Unpack json links
		return Promise.all(resources.map((link: string, index: number) =>
			new Promise(function(resolve) {

				let url: URL = ResourceHandler.parseUrl(link);

				if (url === null)
					return resolve(null);

				if (!url.pathname.endsWith('.json'))
					return resolve([url.href, index]);

				fetch(url.toString(), <RequestInit>NO_CACHE_HEADERS).then((response: Response) =>
					response.json()
				).then((parsed: Object) =>
					resolve([<string[]>parsed, index])
				).catch(() =>
					resolve(null)
				);
			})
		));
	}

	static async sortResources(resources: Array<[string | string[], number]>): Promise<Array<[string, number]>> {

		// Remove invalid urls
		resources = resources.filter(r => r !== null);

		// Sort by index
		const resourcesWithoutIndex = resources.sort(([{ }, url_a_index], [{ }, url_b_index]) =>
			url_a_index - url_b_index
		).map(r => r[0]).flat();

		// remove duplicated urls
		return Array.from(new Set(resourcesWithoutIndex)).map((res: string, i: number) => {
			return [res, i];
		});

	}

	static async getSourceCode(resources: Array<[string, number]>) {
		// Download scripts in parallel
		return Promise.all(resources.map(([link, resourceIndex]: [string, number]) => {
			return new Promise(function(resolve) {

				let url: URL = ResourceHandler.parseUrl(link);

				if (url === null)
					return resolve(false);

				if (!url.pathname.endsWith('.js'))
					return resolve(false);

				return fetch(url.toString(), <RequestInit>NO_CACHE_HEADERS).then(response =>
					response.text()
				).then(scriptSource =>
					resolve([scriptSource, resourceIndex])
				).catch((err) => {
					this.MODULE.debug.error(url.href, err);
					resolve(false)
				});
			})
		}))
	}

	static contextEval(source: string): Module {
		return (function(Debug, LocalStorage, Config, FlagHandler, CSSHandler, Module, FC, Utils, ModuleHandler, GLOBAL_ENTRY_NAME, VERSION_HASH, NO_CACHE_HEADERS) {
			return eval(source);
		})(Debug, LocalStorage, Config, FlagHandler, CSSHandler, Module, FC, Utils, ModuleHandler, GLOBAL_ENTRY_NAME, VERSION_HASH, NO_CACHE_HEADERS);
	}
}

const MODULE = new Module(<ModuleParameters>{
	moduleName: 'MODULE_HANDLER',
	title: 'Module handler',
	author: 'pytness',
	version: '1.1',
	match: ['*']
});

MODULE.config.getMeta('ENABLED')
	.flags.unset('CONFIGURABLE');

MODULE.config.define('LAST_VERSION_HASH', {
	defaultValue: false,
}).define('RESOURCES', <MetaConfigType>{
	title: 'User resources',
	defaultValue: [
		'rgh:Pytness/fc-modules/master/modules/defaultSources.json'
	],
	flags: ['CONFIGURABLE'],

	getter: function() {

		let value = this.value.join('\n');

		if (value.length > 0)
			value += '\n';

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

// Remove CONFIGURABLE flag
MODULE.config.getMeta('ENABLED')
	.flags.unset('CONFIGURABLE');

MODULE.onload = function() {

	this.config.set('DEBUG_MODULE_NAME', false);
	this.config.set('DEBUG_MODE', true);

	// Detect version changes
	if (VERSION_HASH != this.config.get('LAST_VERSION_HASH')) {
		// TODO: notify user
		this.config.set('LAST_VERSION_HASH', VERSION_HASH);
	}

	ModuleHandler.loadUserResources().then(() =>
		ModuleHandler.loadModules()
	);
}

export class ModuleHandler {

	// static readonly MODULE: Module = MODULE;
	static modules: Map<string, Module> = new Map([[MODULE.moduleName, MODULE]]);

	public static has(key: string): boolean {
		return ModuleHandler.modules.has(key);
	}

	public static get(key: string): Module {
		return ModuleHandler.modules.get(key);
	}

	public static push(module: Module): void {
		if (!(module instanceof Module))
			throw 'Module must be an instance of Module';

		if (ModuleHandler.modules.has(module.moduleName))
			throw 'Module already declared';

		ModuleHandler.modules.set(module.moduleName, module);
	}

	public static delete(key: string): boolean {
		return this.modules.delete(key);
	}

	public static keys(): Array<string> {
		return Array.from(this.modules.keys());
	}

	public static size(): number {
		return ModuleHandler.modules.size;
	}

	// Register modules in global storage if not exists
	public static registerModules(): void {
		let regModules = GM_getValue(GLOBAL_ENTRY_NAME);

		ModuleHandler.modules.forEach((module: Module) => {
			if (!Object.keys(regModules).includes(module.moduleName)) {
				regModules[module.moduleName] = {};
			}
		});

		GM_setValue(GLOBAL_ENTRY_NAME, regModules);
	}

	// Sort modules based on requirements
	public static sortModules(): void {

		// Check for colliding requirements
		ModuleHandler.modules.forEach((module: Module) => {

			let moduleName = module.moduleName;

			module.require.every(requiredModuleName => {
				if (!ModuleHandler.modules.has(requiredModuleName)) {
					throw `Module '${moduleName}' requires '${requiredModuleName}'`;
				}

				let requiredModule = ModuleHandler.modules.get(requiredModuleName);

				if (requiredModule.require.includes(moduleName)) {
					throw `Modules '${moduleName}' and '${requiredModuleName}' must not require each other`;
				}
			});
		});

		let moduleArray = Array.from(ModuleHandler.modules.entries());

		moduleArray.sort(([_a, MODULE_A], [_b, MODULE_B]) => {
			if (MODULE_A.require.includes(_b))
				return 1;

			if (MODULE_B.require.includes(_a))
				return -1;

			return 0;
		});

		// Clear and re-set modules
		ModuleHandler.modules.clear();

		moduleArray.forEach(([key, value]) => {
			ModuleHandler.modules.set(key, value);
		});
	}

	public static async loadUserResources(): Promise<any> {
		let resources: Array<string | [URL, number]> = MODULE.config.get('RESOURCES');

		// Load user resources
		return ResourceHandler.unpackJSONlinks(<string[]>resources)
			.then(ResourceHandler.sortResources)
			.then(ResourceHandler.getSourceCode)
			.then(scriptSources => {
				// Sort by scriptSource by index
				scriptSources.filter(a =>
					a !== false
				).sort(([_a, ai], [_b, bi]) =>
					ai - bi
				).forEach(([source, { }]) => {
					try {
						const EVALED_MODULE = ResourceHandler.contextEval(source);

						if (EVALED_MODULE instanceof Module)
							ModuleHandler.push(EVALED_MODULE)

					} catch (err) {
						MODULE.debug.error(err);
					}
				});
			})
	}

	public static loadModules(): void {

		ModuleHandler.registerModules();

		ModuleHandler.sortModules();

		ModuleHandler.modules.forEach((module: Module) => {

			// Skip if already loaded
			if (module.loaded) return;

			if (module.load()) {
				MODULE.debug.log(
					`Loaded [${module.moduleName}]:` +
					`\n\tTitle:   ${module.info.title}` +
					`\n\tDesc:    ${module.info.description}` +
					`\n\tAuthor:  ${module.info.author}` +
					`\n\tVersion: ${module.info.version}`
				);
			} else {
				MODULE.debug.log('Didnt load ', module.moduleName);
			}
		});
	}

	//

	public static unloadModules(): void {
		ModuleHandler.modules.forEach(module => {

			// Skip if not loaded
			if (!module.loaded) return;

			module.unload();

			MODULE.debug.log(`Unloaded [${module.moduleName}]`);

		});
	}

	public static reloadModules(): void {
		MODULE.debug.log('Reloading modules...');

		ModuleHandler.modules.forEach(module => {

			if (!module.loaded) return;

			module.onunload();
			module.onload();

			MODULE.debug.log(`Reloaded [${module.moduleName}]`);
		});
	}
}
