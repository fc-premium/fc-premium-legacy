import {
	Debug,
	LocalStorage,
	Config,
	MetaConfigType,
	FlagHandler,
	CSSHandler
} from '../module'

import { GLOBAL_ENTRY_NAME, VERSION_HASH, NO_CACHE_HEADERS } from '../definitions'
// import  } from '../utils' // Temp
import { FC } from '../fc-api'
import { ResourceHandler } from './resource-handler'
import { Module, ModuleParameters } from '../module'

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
		'rgh:fc-premium/fc-premium/master/modules/defaultSources.json'
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

function contextEval(source: string): Module {
	return (function(Debug, LocalStorage, Config, FlagHandler, CSSHandler, Module, FC, ModuleHandler, GLOBAL_ENTRY_NAME, VERSION_HASH, NO_CACHE_HEADERS) {
		return eval(source);
	})(Debug, LocalStorage, Config, FlagHandler, CSSHandler, Module, FC, ModuleHandler, GLOBAL_ENTRY_NAME, VERSION_HASH, NO_CACHE_HEADERS);
}

export class ModuleHandler {

	// static readonly MODULE: Module = MODULE;
	static modules: Map<string, Module> = new Map([[MODULE.name, MODULE]]);

	public static has(key: string): boolean {
		return ModuleHandler.modules.has(key);
	}

	public static get(key: string): Module {
		return ModuleHandler.modules.get(key);
	}

	public static push(module: Module): void {
		if (!(module instanceof Module))
			throw 'Module must be an instance of Module';

		if (ModuleHandler.modules.has(module.name))
			throw 'Module already declared';

		ModuleHandler.modules.set(module.name, module);
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
			if (!Object.keys(regModules).includes(module.name)) {
				regModules[module.name] = {};
			}
		});

		GM_setValue(GLOBAL_ENTRY_NAME, regModules);
	}

	// Sort modules based on requirements
	public static sortModules(): void {

		// Check for colliding requirements
		ModuleHandler.modules.forEach((module: Module) => {

			let moduleName = module.name;

			module.require.every((requiredModuleName: string) => {
				if (!ModuleHandler.modules.has(requiredModuleName))
					throw `Module '${moduleName}' requires '${requiredModuleName}'`;

				const requiredModule = ModuleHandler.modules.get(requiredModuleName);

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
						const EVALED_MODULE = contextEval(source);

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
					`Loaded [${module.name}]:` +
					`\n\tTitle:   ${module.info.title}` +
					`\n\tDesc:    ${module.info.description}` +
					`\n\tAuthor:  ${module.info.author}` +
					`\n\tVersion: ${module.info.version}`
				);
			} else {
				MODULE.debug.log('Didnt load ', module.name);
			}
		});
	}

	public static unloadModules(): void {
		ModuleHandler.modules.forEach(module => {

			// Skip if not loaded
			if (!module.loaded) return;

			module.unload();

			MODULE.debug.log(`Unloaded [${module.name}]`);

		});
	}

	public static reloadModules(): void {
		MODULE.debug.log('Reloading modules...');

		ModuleHandler.modules.forEach(module => {

			if (!module.loaded) return;

			module.onunload();
			module.onload();

			MODULE.debug.log(`Reloaded [${module.name}]`);
		});
	}
}
