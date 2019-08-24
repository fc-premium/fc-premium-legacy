/// <reference path="../node_modules/@types/jquery/index.d.ts" />

import { VERSION_HASH } from './definitions'
import { ModuleHandler } from './module-handler'
import { CONTROL_PANEL_MODULE } from './control-panel'

console.log(`Version hash: ${VERSION_HASH}`);

interface GM_Resource {
	meta: string;
	content: string;
};

// Load css resources
(<GM_Resource[]><unknown>GM_info.script.resources).forEach((resource: GM_Resource) => {
	GM_addStyle(resource.content);
})

// console.log({
// 	GM_getValue, GM_setValue
// })

ModuleHandler.push(CONTROL_PANEL_MODULE);
ModuleHandler.loadModules();
