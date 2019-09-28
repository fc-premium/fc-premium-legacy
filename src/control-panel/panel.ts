import {
	SETTINGS_BUTTON_TAG,
	TERMINAL_BUTTON_TAG,
	RESET_BUTTON_TAG,
	moduleListTable,
	backButton
} from './constants'

import Vue from "vue";

import { Module } from '../module'
import { ModuleHandler } from '../module-handler'

import { DevTerminal } from './dev-terminal/terminal'

export class Panel {
	private readonly MODULE: Module;

	public constructor(module: Module) {
		this.MODULE = module
	}

	public saveConfigDialog(modal: SweetAlertType): void { }

	public async showModuleConfigDialog(moduleName: string): Promise<void> {

	}

	public async showModuleListDialog(): Promise<void> { }

	// abstract public async showTerminal(): Promise < SweetAlertResult >
}
