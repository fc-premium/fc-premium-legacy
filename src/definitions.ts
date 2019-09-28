import SHA from 'sha.js'

window = unsafeWindow;

export let VERSION_HASH: string = SHA("sha256")
	.update(GM_info.scriptSource, 'utf8')
	.digest('hex');

export const GLOBAL_ENTRY_NAME = "FC_MODULE_HANDLER";

// Set default local storage entry value
if (GM_getValue(GLOBAL_ENTRY_NAME) === undefined)
	GM_setValue(GLOBAL_ENTRY_NAME, {});

// Prevent console methods beign replaced
const _console: Console = Object.freeze(Object.assign({}, window.console));

export const NO_CACHE_HEADERS = new Headers();
NO_CACHE_HEADERS.append('pragma', 'no-cache');
NO_CACHE_HEADERS.append('cache-control', 'no-cache');

Object.freeze(NO_CACHE_HEADERS);

Object.defineProperties(window, {

	console: {
		value: _console
	},

	jQuery: {
		value: jQuery
	},

	$: {
		value: jQuery
	}
});
