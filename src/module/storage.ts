import { GLOBAL_ENTRY_NAME } from '../definitions'
import { Module } from './module'

/**
 * Interface between a module and the tampermonkey storage
 * @param module Module reference
 */

export class LocalStorage {
	private readonly module: Module;

	public constructor(moduleReference: Module) {
		this.module = moduleReference;
	}

	public has(key: string): boolean {
		const globalObject = GM_getValue(GLOBAL_ENTRY_NAME);
		return globalObject[this.module.name].hasOwnProperty(key);
	}

	public get(key: string): any {
		const globalObject = GM_getValue(GLOBAL_ENTRY_NAME);
		return globalObject[this.module.name][key];
	}

	public set(key: string, value: any): void {
		const globalObject = GM_getValue(GLOBAL_ENTRY_NAME);
		globalObject[this.module.name][key] = value;

		GM_setValue(GLOBAL_ENTRY_NAME, globalObject);
	}
}
