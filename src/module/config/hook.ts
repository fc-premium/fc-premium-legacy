import { MetaConfig, MetaConfigType } from './meta-config'
import { Module } from '../module'

/**
 * Allows to reference another module configuration
 * @param moduleReference [description]
 * @param hookConfig      [description]
 * @param metaConfig      [description]
 */

export class Hook extends MetaConfig {

	public readonly hook: MetaConfig;

	public constructor(moduleReference: Module, hookConfig: MetaConfig, metaConfig: MetaConfigType) {

		super(moduleReference, hookConfig.referenceKey, metaConfig);

		this.hook = hookConfig;

		// Object.defineProperties(this, {
		// 	value: {
		// 		get: () => this.hook.value,
		// 		set: (value) => this.hook.value = value
		// 	},
		//
		// 	defaultValue: {
		// 		get: () => this.hook.defaultValue,
		// 		set: (value) => this.hook.defaultValue = value
		// 	}
		// });
	}

	get value() {
		return this.hook !== undefined ?
			this.hook.value : undefined;
	}

	set value(value: any) {
		if (this.hook !== undefined)
			this.hook.value = value;
	}

	get defaultValue() {
		return this.hook !== undefined ?
			this.hook.defaultValue : undefined;
	}

	set defaultValue(value: any) {
		if (this.hook !== undefined)
			this.hook.defaultValue = value;
	}
}
