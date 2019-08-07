(function (window, $) {
	'use strict';


	const IN_ROOT_PATH = location.pathname === '/';
	const SPLIT_CHAR = "\n";

	const MODULE = new Module({
		moduleName: 'THREAD_FILTER',
		title: 'Filter Threads',
		description: 'Quita los hilos que tengan x palabras clave',
		author: 'nurbian',
		version: '1.04',

		match: [
			'/',
			'/foro/forumdisplay.php*'
		],

		runat: 'load'
	});

	MODULE.config.define('FILTER_FLAGS', {
		title: 'Filters',
		defaultValue: [],
		flags: ['CONFIGURABLE'],

		getter: function () {
			const value = this.value.map(f =>
				f.trim()
			).filter(f =>
				f.length > 0
			).join(SPLIT_CHAR);

			return Config.HTML.TEXTAREA.GETTER(value, {
				cols: 80,
				rows: 20
			});
		},

		parser: function (el) {
			const currentValue = Config.HTML.TEXTAREA.PARSER(el).split(SPLIT_CHAR).map(f =>
				f.trim()
			).filter(f =>
				f.length > 0
			);

			return currentValue;
		},

		events: {
			save: function () {
				filterThreads();
			}
		}

	});

	const threadLinksQuery = IN_ROOT_PATH ?
		'a.texto[href*="/foro/showthread.php?t="][title]' :
		'a[href*="showthread.php?t="][id]';

	const filterThreads = () => {

		MODULE.debug.log('Called filterThreads');

		const threadLinks = $(threadLinksQuery);

		if (threadLinks.length === 0) {
			MODULE.debug.error('No threads found');
			return;
		}

		// show every thread row
		threadLinks.closest('tr').show();

		let flags = MODULE.config.get('FILTER_FLAGS');

		// For each thread link
		threadLinks.each((i, el) => {
			el = $(el);
			let title = (IN_ROOT_PATH ? el.attr('title') : el.text())
				.toLowerCase()
				.removeTildes();

			const includesFilteredPhrase = !flags.every(f => {
				return !title.includes(f)
			});

			if (includesFilteredPhrase)
				el.closest('tr').hide();
		});
	};

	MODULE.onload = function () {
		filterThreads();
	};

	MODULE.onunload = function () {
		const threadLinks = $(threadLinksQuery);

		if (threadLinks.length === 0) {
			MODULE.debug.error('No threads found');
			return;
		}

		// show every thread row
		threadLinks.closest('tr').show();
	};

	return MODULE;

})(unsafeWindow, jQuery);
