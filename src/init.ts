import { VERSION_HASH } from './definitions'
import { ModuleHandler } from './module-handler'
import { CONTROL_PANEL_MODULE } from './control-panel'

function asciiBox(lines: string[], minBoxWidth: number = 0): string {
	let result: string = '';

	const boxWidth: number = Math.max(minBoxWidth,
		...lines.map(x => x.length + 2)
	);

	const header: string = '+'.padEnd(boxWidth, '=') + '+';

	lines.forEach((line: string) => {
		result += '|' + line.padEnd(boxWidth - 1, ' ') + '|\n'
	});
	return header + '\n' + result + header;
};

console.log(asciiBox([
	` Title   : ${GM_info.script.name}`, '',
	` Version : ${GM_info.script.version}`,
	` Hash    : [${VERSION_HASH.slice(0, 8)}]`, '',
	` By      : ${GM_info.script.author}`, '',
], 40));

// Load css resources
(GM_info.script.resources).forEach((resource: GM_Resource) => {
	if (resource.name.endsWith('.css'))
		GM_addStyle(resource.content);
});

ModuleHandler.push(CONTROL_PANEL_MODULE);
ModuleHandler.loadModules();
// 
// import Octokit from '@octokit/rest'
//
// const octokit = new Octokit({
// 	auth: '41738453f108f86f1b4f9dae3d774e74e790ea08'
// });
//
// function listFCModules() {
// 	octokit.repos.listReleases({
// 		owner: 'pytness',
// 		repo: '__fc-modules'
// 	}).then(console.log)
// 		.catch(console.error)
//
// }
//
//
// listFCModules()
