import { ValidEventTypes } from './constants'

import { Module } from '../module'
import { FlagHandler } from '../flaghandler'

export interface MetaConfigType {
	title?: string;
	section?: string;
	description?: string;
	defaultValue?: any;
	value?: any;

	flags?: Array<string>;

	getter?: Function;
	parser?: Function;

	events?: Object;
}


/*
Events:  "save" | "HTMLAppended"
 */

export class MetaConfig {
	private readonly __events__: Map<string, Array<Function>>; // event type, Event list

	public readonly hostModule: Module;
	public readonly referenceKey: string;

	public readonly flags: FlagHandler;
	public readonly title: string;
	public readonly section: string;
	public readonly description: string;

	public value: any;
	public defaultValue: any;

	public readonly getHTML: Function;
	public readonly parseHTML: Function;

	public constructor(moduleReference: Module, key: string, metaConfig: MetaConfigType) {

		// Create a module reference
		this.hostModule = moduleReference;
		this.referenceKey = key;

		this.__events__ = new Map();

		let _flags = metaConfig.flags instanceof Array ?
			metaConfig.flags : [];

		this.flags = new FlagHandler(_flags);

		if (this.flags.isset('CONFIGURABLE') || this.flags.isset('WIDGET')) {

			if (typeof metaConfig.getter !== 'function')
				throw [this.hostModule, 'A configurable config / widget needs a getter method'];

			if (typeof metaConfig.parser !== 'function' && !this.flags.isset('WIDGET'))
				throw 'A configurable config needs a parser method';


			this.section = typeof (metaConfig.section) == 'string' ?
				metaConfig.section : 'General';

			const getter = metaConfig.getter.bind(this);
			const parser = typeof metaConfig.parser === 'function' ?
				metaConfig.parser.bind(this) : () => { };

			this.getHTML = function(element: HTMLElement) {
				return getter(element);
			};

			this.parseHTML = function(element: HTMLElement) {

				this.value = parser(element);

				this.dispatchEvent('save');

				return this.value
			};

			delete metaConfig.getter;
			delete metaConfig.parser;
		}

		this.title = typeof metaConfig.title === 'string' ?
			metaConfig.title : '';

		this.description = metaConfig.description;

		this.defaultValue = metaConfig.defaultValue;

		// Pre set value, this will be changed later by Config.loadSavedConfig
		this.value = this.defaultValue;

		const self = this;

		if (metaConfig.events instanceof Object) {
			Object.entries(metaConfig.events).forEach(([type, callback]) =>
				this.addEventListener(type, callback.bind(self))
			);
		}
	}

	/**
	 * Append an event listener to the event type list.
	 * The callback will be invoked when the event type is dispatched
	 * @param  {ValidEventTypes} type     [description]
	 * @param  {Function} callback [description]
	 * @return {void}
	 */

	addEventListener(type: ValidEventTypes, callback: Function): void {

		if (typeof (type) !== 'string')
			throw 'type must be a string';

		if (typeof (callback) !== 'function')
			throw 'callback must be a function';

		// Create type if not exists
		if (!this.__events__.has(type))
			this.__events__.set(type, [])

		this.__events__.get(type).push(callback);
	}

	/**
	 * Removes all events listener from list with the same type and callback if given
	 * @param  {ValidEventTypes} type
	 * @param  {Function} callback
	 * @return {void}
	 */
	removeEventListener(type: ValidEventTypes, callback: Function = null): void {
		if (!this.__events__.has(type))
			return;

		// Remove all callbacks if no one specified
		if (callback === null)
			this.__events__.set(type, []);

		let newEvents = this.__events__.get(type)
			.filter(cb => cb !== callback)

		this.__events__.set(type, newEvents);
	}

	/**
	 * Dispatch a event type and invoke its callbacks with the given 'args'
	 * @param  {ValidEventTypes} type
	 * @param  {Array<any>} ...args Additional arguments to pass to the invoked callbacks
	 * @return {void}
	 */
	dispatchEvent(type: string, ...args: Array<any>): void {
		if (!this.__events__.has(type))
			return;

		this.__events__.get(type).forEach(callback => {
			// Excute it inside a try block so it can continue execution if it fails
			try {
				callback(this, ...args)
			} catch (e) { }
		});
	}
}
