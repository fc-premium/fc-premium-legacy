(function (window) {

	/*

	x = gapi.client.drive.files.create({
        	fields: 'id',
        	resource: { name: 'juejue', parents: ['appDataFolder'] }
	}).then(e => console.log(e))

	gapi.client.drive.files.list({
		q: 'name="juejue"',
		spaces: 'appDataFolder',
		fields: 'files(id)'
	}).then(console.log)

     	gapi.client.drive.files.get({ fileId: id, alt: 'media' })

	gapi.client.request({
        	path: idxTpl('/upload/drive/v3/files/{0}', id),
		method: 'PATCH',
		params: { uploadType: 'media' },
		body: JSON.stringify(data)
	});
	*/

	// window.gapi = gapi;

	const MODULE = new Module({
		moduleName: 'FC_SYNC',
		title: 'GDrive sync',
		description: 'Syncronize fc settings in google drive',
		author: 'pytness',
		version: '0.3 beta',

		match: ['*'],

		preload: ['https://apis.google.com/js/api.js']
	});

	const SYNC_FILENAME = 'fc_config.json';

	MODULE.config.define('AUTO_UPLOAD', {
		title: 'Auto upload',
		description: 'Saves automatically every local config change in the cloud',
		defaultValue: false,
		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.SWITCH.GETTER(this.value);
		},

		parser: Config.HTML.SWITCH.PARSER
	}).define('AUTO_SYNC', {
		title: 'Auto sync',
		description: 'Applies any change in the cloud',
		defaultValue: false,
		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.SWITCH.GETTER(this.value);
		},

		parser: Config.HTML.SWITCH.PARSER
	}).define('AUTO_RELOAD', {
		title: 'Auto reload',
		description: 'Reloads automatically the modules when the config is syncronized',
		defaultValue: false,
		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.SWITCH.GETTER(this.value);
		},

		parser: Config.HTML.SWITCH.PARSER,

		events: {
			HTMLAppended: function (meta, el) {
				meta.value = Config.HTML.SWITCH.PARSER(el);
			}
		}
	}).define('LOGIN_BUTTON', {
		title: '',
		flags: ['WIDGET'],

		getter: function () {
			return Config.HTML.BUTTON.GETTER('');
		},

		events: {
			HTMLAppended: function (meta, el) {
				const button = $(el).find('input')[0];

				button.value = userSignedIn ?
					'Sign Out' : 'Sign In';

				gapi.auth2.getAuthInstance().isSignedIn.listen(function (isSignedIn) {
					button.value = isSignedIn ?
						'Sign Out' : 'Sign In';
				});

				button.addEventListener('click', function (e) {
					MODULE.debug.log('CLICKED');

					if (userSignedIn)
						gapi.auth2.getAuthInstance().signOut();
					else
						gapi.auth2.getAuthInstance().signIn();
				});
			}
		}
	}).define('SYNC_BUTTON', {
		title: '',
		flags: ['WIDGET'],

		getter: function () {
			return Config.HTML.BUTTON.GETTER('Load saved config');
		},

		events: {
			HTMLAppended: function (meta, el) {

				const button = $(el).find('input')[0];

				button.disabled = !userSignedIn;

				gapi.auth2.getAuthInstance().isSignedIn.listen(function (isSignedIn) {
					button.disabled = !isSignedIn;
				});

				button.addEventListener('click', function (e) {
					if (userSignedIn) {
						listFiles();

						getConfigFile().then(file => {
							if (file === false) {
								MODULE.debug.log('Config file not found');
							} else {
								const newConfig = JSON.safeParse(file.body);

								if (newConfig !== undefined) {
									GM_setValue(GLOBAL_ENTRY_NAME, newConfig);


									if (MODULE.config.get('AUTO_RELOAD')) {
										// Reload all modules configurations
										FC_MODULES.keys().forEach(key => {
											FC_MODULES.get(key).config.loadSavedConfig()
										});

										FC_MODULES.reloadModules();
									} else {

										let n = new Noty({
											theme: 'nest',
											text: 'Config syncronized with the cloud. Do you want to reload the modules?',
											buttons: [
												Noty.button('Yes', 'btn btn-success', function () {
													n.close();

													// Reload all modules configurations
													FC_MODULES.keys().forEach(key => {
														FC_MODULES.get(key).config.loadSavedConfig()
													});

													FC_MODULES.reloadModules();
												}),

												Noty.button('No', 'btn btn-danger', function () {
													n.close();
												})
											]
										});

										n.show();
									}

								}
							}
						});
					}
				});
			}
		}
	}).define('SAVE_BUTTON', {
		title: '',
		flags: ['WIDGET'],

		getter: function () {
			return Config.HTML.BUTTON.GETTER('Save to cloud');
		},

		events: {
			HTMLAppended: function (meta, el) {

				const button = $(el).find('input')[0];

				button.disabled = !userSignedIn;

				gapi.auth2.getAuthInstance().isSignedIn.listen(function (isSignedIn) {
					button.disabled = !isSignedIn;
				});

				button.addEventListener('click', function (e) {
					if (userSignedIn) {
						const data = JSON.stringify(GM_getValue(GLOBAL_ENTRY_NAME));

						if (typeof data === 'string') {
							setConfigFile(data);
							MODULE.debug.log('Data saved');
						}
					}
				});
			}
		}
	});

	const CLIENT_ID = '155982770583-kqigatpfdst9n384rninnd6d50t6kq4t.apps.googleusercontent.com';
	const API_KEY = 'AIzaSyBQ2rTtFrDeNNoSpU2Hx3uPgChW-QI1sBQ';
	const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
	const SCOPES = 'https://www.googleapis.com/auth/drive.appdata';

	const DRIVE_UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=*';

	let userSignedIn = false;

	function onSigninStatus(isSignedIn) {
		MODULE.debug.info('Is signed in: ', isSignedIn);

		userSignedIn = isSignedIn;

		// if (!isSignedIn)
		// 	gapi.auth2.getAuthInstance().signIn();
	}

	function initClient() {

		gapi.client.init({
			apiKey: API_KEY,
			clientId: CLIENT_ID,
			discoveryDocs: DISCOVERY_DOCS,
			scope: SCOPES
		}).then(function () {

			// Add event listener on sign status
			gapi.auth2.getAuthInstance().isSignedIn.listen(onSigninStatus);

			// Handle the initial sign-in state.
			onSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
		}, function (error) {
			MODULE.debug.error(error);
		});
	}

	function handleClientLoad() {
		gapi.load('client:auth2', initClient);
	}

	function uploadFile(object) {

		let file = object.file;
		let metadata = object.metadata;
		let accessToken = object.accessToken;

		var form = new FormData();

		form.append('metadata', new Blob([JSON.stringify(metadata)], {
			type: 'application/json'
		}));

		form.append('file', file);

		return fetch(DRIVE_UPLOAD_URL, {
			method: 'POST',
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			}),
			body: form,
		})
	}

	function setConfigFile(data = '') {

		// Find if file exists

		return gapi.client.drive.files.list({
			q: `name="${SYNC_FILENAME}"`,
			spaces: 'appDataFolder',
			fields: 'files(id)'
		}).then(response => {
			let files = response.result.files;

			// if config file does not exists
			if (files.length == 0) {

				// Create file and return its id
				return gapi.client.drive.files.create({
					fields: '*',
					resource: {
						name: SYNC_FILENAME,
						parents: ['appDataFolder']
					}
				})

			} else { // File exists

				// Returns current file id
				return {
					result: {
						id: files[0].id
					}
				};
			}
		}).then(response => {
			// Update file
			const id = response.result.id;
			return gapi.client.request({
				path: '/upload/drive/v3/files/' + id,
				method: 'PATCH',
				params: {
					uploadType: 'media'
				},
				body: data
			});
		});
	}

	function getConfigFile() {
		return gapi.client.drive.files.list({
			q: `name="${SYNC_FILENAME}"`,
			spaces: 'appDataFolder',
			fields: '*'
		}).then(response => {
			let files = response.result.files;

			if (files.length != 0) {
				return gapi.client.drive.files.get({
					fileId: files[0].id,
					alt: 'media'
				});
			} else {
				return false;
			}
		});
	}

	function listFiles() {
		gapi.client.drive.files.list({
			// q: 'name=*',
			spaces: 'appDataFolder',
			fields: '*'
		}).then(console.log);
	}

	MODULE.onload = function () {
		handleClientLoad();
	}

	return MODULE;
})(unsafeWindow);
