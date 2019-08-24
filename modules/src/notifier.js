(function () {
	const MODULE = new Module({
		moduleName: 'NOTIFIER',
		title: 'Notifier',
		description: 'Adds notificaciones',
		author: 'pytness',
		version: '1.0',

		match: ['*']
	});

	MODULE.config.define('NOTIFY_MENTIONS', {
		title: 'Notify mentions',
		description: 'Notify mentions',
		defaultValue: true,

		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.SWITCH.GETTER(this.value);
		},

		parser: Config.HTML.HOTKEY.GETTER

	}).define('NOTIFY_QUOTES', {
		title: 'Notify quotes',
		description: 'Notify quotes',
		defaultValue: true,

		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.SWITCH.GETTER(this.value, {
				class: 'fancy-input'
			});
		},

		parser: Config.HTML.SWITCH.GETTER

	}).define('NOTIFY_PM', {
		title: 'Notify PM',
		description: 'Notify private messages',
		defaultValue: true,

		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.SWITCH.GETTER(this.value, {
				class: 'fancy-input'
			});
		},

		parser: Config.HTML.SWITCH.GETTER

	}).define('FETCH_WAIT', {
		title: 'Fetch wait',
		description: 'Amount of seconds between notification checks',
		defaultValue: 30,

		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.INPUT.GETTER(this.value, {
				type: 'number',
				class: 'fancy-input'
			});
		},

		parser: function (el) {
			let lastValue = this.value;
			let currentValue = parseInt(Config.HTML.INPUT.PARSER(el));

			currentValue = isNaN(currentValue) ?
				lastValue : currentValue;

			if (currentValue !== lastValue) {
				checkForNotifications();
			}

			return currentValue;
		}
	});


	function checkNotifications() {

	}

	MODULE.onload = function () {
		// MODULE.storage.set('LAST_CHECK', Date.now());
		// Utils.getNotifications().then(console.log);

		(async function () {

			// const ID = await FC.getCurrentUserId();
			// const ID = 7329259;
			const currentUser = await FC.getCurrentUser();
			const ignoredUsers = await currentUser.getIgnoredUsersList();
			console.log(ignoredUsers);
		})();

	};

	return MODULE;
})();
