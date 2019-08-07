import { Module } from './module.class'

/**
 * Implements an interface to the console api
 * @param module module reference from to get the configuration
 */
export class Debug {

	private readonly hostModule: Module;

	constructor(module: Module) {
		this.hostModule = module;
	}

	log(...args: any[]): void {
		if (this.hostModule.config.get('DEBUG_MODE') !== true)
			return void 0;

		if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
			args = [`[${this.hostModule.moduleName}]`, ...args];

		console.log(...args);
	}

	info(...args: any[]): void {
		if (this.hostModule.config.get('DEBUG_MODE') !== true)
			return void 0;

		if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
			args = [`[${this.hostModule.moduleName}]`, ...args];

		console.info(...args);
	}

	warn(...args: any[]): void {
		if (this.hostModule.config.get('DEBUG_MODE') !== true)
			return void 0;

		if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
			args = [`[${this.hostModule.moduleName}]`, ...args];

		console.warn(...args);

	}

	error(...args: any[]): void {
		if (this.hostModule.config.get('DEBUG_MODE') !== true)
			return void 0;

		if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
			args = [`[${this.hostModule.moduleName}]`, ...args];

		console.error(...args);
	}

	alert(arg: any): void {
		if (this.hostModule.config.get('DEBUG_MODE') !== true)
			return void 0;

		if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
			arg = `[${this.hostModule.moduleName}] ${arg}`;

		alert(arg);
	}
}
