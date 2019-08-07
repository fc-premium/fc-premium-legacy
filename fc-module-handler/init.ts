/// <reference path="../node_modules/@types/jquery/index.d.ts" />

import { ModuleHandler } from './modulehandler.class'
import { VERSION_HASH } from './definitions'
import { CONTROL_PANEL_MODULE } from './controlpanel.module'

console.log(`Version hash: ${VERSION_HASH}`);

interface GM_Resource {
	meta: string;
	content: string;
};

// Load css resources
(<GM_Resource[]><unknown>GM_info.script.resources).forEach((resource: GM_Resource) => {
	// if (resource.meta === 'text/css')
	GM_addStyle(resource.content);
})

ModuleHandler.push(CONTROL_PANEL_MODULE);
ModuleHandler.loadModules();
