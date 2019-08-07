(function () {
	const MODULE = new Module({
		moduleName: 'TEST_MODULE',
		title: 'Test module',
		description: 'A module to test the modulehandler',
		version: 'none',
		author: 'pytness',

		match: ['*']
	});

	MODULE.config.getMeta('ENABLED')
		.flags.set('BEGINNER');

	MODULE.config.define('KEY_INDEX', {
		defaultValue: 0,
	});

	MODULE.config.define('____KEY_INDEX', {
		defaultValue: 1,
	});
})();
