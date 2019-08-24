/// <reference path="../node_modules/@types/jquery/index.d.ts" />

import { VERSION_HASH } from './definitions'
import { ModuleHandler } from './module-handler'
import { CONTROL_PANEL_MODULE } from './control-panel'

console.log(`Version hash: ${VERSION_HASH}`);

// Load css resources
(GM_info.script.resources).forEach((resource: GM_Resource) => {
	if (resource.name.endsWith('.css'))
		GM_addStyle(resource.content);
});

ModuleHandler.push(CONTROL_PANEL_MODULE);
ModuleHandler.loadModules();
