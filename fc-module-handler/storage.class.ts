/// <reference path="../node_modules/@types/jquery/index.d.ts" />

import { GLOBAL_ENTRY_NAME } from './definitions'
import { Module } from './module.class'

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
		let globalObject = GM_getValue(GLOBAL_ENTRY_NAME);
		return globalObject[this.module.moduleName].hasOwnProperty(key);
	}

	public get(key: string): any {
		let globalObject = GM_getValue(GLOBAL_ENTRY_NAME);
		return globalObject[this.module.moduleName][key];
	}

	public set(key: string, value: any): void {
		let globalObject = GM_getValue(GLOBAL_ENTRY_NAME);

		globalObject[this.module.moduleName][key] = value;

		GM_setValue(GLOBAL_ENTRY_NAME, globalObject);
	}
}
