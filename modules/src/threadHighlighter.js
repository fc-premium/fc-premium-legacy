(function ($) {
	'use strict';

	const MODULE = new Module({
		moduleName: 'THREAD_HL',
		title: 'Thread highlighter',
		description: 'Highlight threads with custom colors',
		author: 'comandantexd',
		version: '1.1',

		match: [
			'/',
			'/foro/forumdisplay.php*'
		]
	});

	MODULE.config
		.define('HIGHLIGHT_COLOR', {
			title: 'Highlight color',
			defaultValue: '#C0DDFB',
			flags: ['CONFIGURABLE'],

			getter: function () {
				return Config.HTML.COLOR.GETTER(this.value);
			},

			parser: Config.HTML.COLOR.PARSER
		})
		.define('FLAGS', {
			title: 'Flags',
			defaultValue: [],
			flags: ['CONFIGURABLE'],

			getter: function () {
				let flags = this.value.join('\n');

				flags += flags.length > 0 ? '\n' : '';

				return Config.HTML.TEXTAREA.GETTER(flags);
			},

			parser: function (el) {
				let flags = Config.HTML.TEXTAREA.PARSER(el);

				return flags.trim().split('\n')
					.map(flag => flag.trim())
					.filter(flag => flag.length !== 0);
			}
		});

	let rowsSelected;

	MODULE.onload = function () {
		let regularSel;

		const flags = MODULE.config.get('FLAGS');

		if (location.pathname === '/') {
			regularSel = flags.map(f => `a[title*='${f}' i]`).join(', ');
			rowsSelected = $(regularSel).parent();
		} else {
			regularSel = flags.map(f => `a:icontains('${f}')`).join(', ');
			rowsSelected = $(regularSel).parent().parent();
		}

		rowsSelected.css({
			backgroundColor: MODULE.config.get('HIGHLIGHT_COLOR'),
		});
	};

	MODULE.onunload = function () {
		rowsSelected.css({
			backgroundColor: 'unset',
		});
	};

	return MODULE;

})(jQuery);
