(function ($) {
	'use strict';

	const MODULE = new Module({
		moduleName: 'IGNORE_USERS_PP',
		title: 'Ignore users ++',
		description: 'Completely remove comments from ignored users',
		author: 'pytness',
		version: '2.0',

		match: [
			'/',
			'/foro/forumdisplay.php?f=*',
			'/foro/profile.php?do=ignorelist*',
			'/foro/showthread.php*',
		],

		runat: 'load'

	});

	MODULE.config.define('IU_LIST', {
			defaultValue: [],
		})
		.define('UPDATE', {
			defaultValue: true,
		})
		.define('FORCE_UPDATE', {
			title: 'Force update',
			description: 'Always check for new ignored users',
			defaultValue: false,
			flags: ['CONFIGURABLE'],

			getter: function () {
				return Config.HTML.SWITCH.GETTER(this.value);
			},

			parser: Config.HTML.SWITCH.PARSER
		}).define('HIDE_IU_POSTS', {
			title: 'Hide iu posts',
			description: 'Hides all posts created by a ignored user',
			defaultValue: false,
			flags: ['CONFIGURABLE'],

			getter: function () {
				return Config.HTML.SWITCH.GETTER(this.value);
			},

			parser: Config.HTML.SWITCH.PARSER,

			events: {
				save: function () {
					MODULE.debug.log(this);
					switch (PATH) {
					case FC_PATHS.absolute_path:
						setThreadVisibilityFromRoot(!this.value);
						break;

					case FC_PATHS.forumdisplay:
						setThreadVisibilityFromForumdisplay(!this.value);
						break;

					case FC_PATHS.showthread:
						setPostVisibility(!this.value)
						break;
					default:
						break;
					}
				}
			}
		});


	const PATH = location.pathname;
	const URL_SEARCH = location.search;

	const FC_PATHS = {
		absolute_path: '/',
		showthread: '/foro/showthread.php',
		ignorelist: '/foro/profile.php?do=ignorelist',
		forumdisplay: '/foro/forumdisplay.php'
	}

	const DEFAULT_FILENAME = 'ignoredusers.export';

	function getAjax(url) {
		let ajax = new XMLHttpRequest();
		ajax.open('GET', url, false);
		ajax.send();

		return ajax.responseText;
	}

	function parseIgnoredListHtml(html) {

		html = Utils.parseHTML(html);

		let li_list = $(html)
			.find('.userlist.floatcontainer')
			.find('li > a');

		let iu_list = {};

		li_list.each((i, el) => {
			let uid = parseInt(el.href.split('=').slice(-1)[0]);
			let uname = el.innerText
				.trim().toLowerCase();

			iu_list[uid] = uname;
		});

		return iu_list;
	}

	function getIgnoredUsersIdList() {

		let iu_list = MODULE.config.get('IU_LIST');
		const do_update = MODULE.config.get('UPDATE') || MODULE.config.get('FORCE_UPDATE');

		if (do_update || Object.keys(iu_list).length === 0) {
			MODULE.debug.log('Updating iu list');
			let response = getAjax(FC_PATHS.ignorelist);

			iu_list = parseIgnoredListHtml(response);

			MODULE.config.set('IU_LIST', iu_list);
			MODULE.config.set('UPDATE', false);

		}

		return iu_list;
	}

	function safehtml(html) {
		return html.replace('<', '&lt;')
			.replace('>', '&gt;');
	}

	const elementExists = selector =>
		$(selector).length !== 0;

	function exportUserList() {

		// Get checked users
		let inputs = $('#ignorelist input[type="checkbox"]')
			.toArray().filter(input => input.checked);

		// exit if no users selected
		if (inputs.length === 0)
			return false;

		let ignoredUsers = {};

		inputs.forEach(input => {
			let user_id = input.value;
			let username = input.parentElement
				.innerText.trim();
			username = encodeURIComponent(username);

			ignoredUsers[user_id] = username;
		});

		let b64json = btoa(JSON.stringify(ignoredUsers));

		let filename = prompt('Nombre del archivo:', DEFAULT_FILENAME);


		// Exit if no filename introduced
		if (filename === null || filename === '')
			return false;

		let blob = new Blob([b64json], {
			type: "text/plain;charset=utf-8"
		});

		let blobLink = URL.createObjectURL(blob);

		let downloadLink = $('<a>')
			.attr('target', '_blank')
			.attr('download', filename)
			.attr('href', blobLink);

		downloadLink.hide();

		$('html > head').append(downloadLink);

		downloadLink[0].click();
		downloadLink.remove();

		window.addEventListener('unload', function () {
			URL.revokeObjectURL(blobLink);
		});
	}

	function updateUserList(uid, uname) {
		let ul = $('#ignorelist');

		if (ul.length === 0) {
			$('<ul class="userlist floatcontainer" id="ignorelist">')
				.insertBefore($('#ignorelist_change_form .submitrow.smallfont'));
			ul = $('#ignorelist');
		}

		// Create and sort checkboxes if not exists
		if (!elementExists(`#user${uid}`)) {
			let li_list = $('#ignorelist li');

			let li = (() => {
				let li = $(`<li id="user${uid}">`);

				let checkbox = $('<input type="checkbox" />')
					.attr('name', `listbits[ignore][${uid}]`)
					.attr('id', `usercheck_${uid}`)
					.attr('value', uid)
					.attr('checked', 'checked');

				let anchor = $(`<a href="member.php?u=${uid}">${uname}</a>`);

				let hidden = $('<input type="hidden" />')
					.attr('name', `listbits[ignore_original][${uid}]`)
					.attr('value', uid);

				li.append(checkbox);
				li.append(anchor);
				li.append(hidden);

				return li;
			})();

			li_list = li_list.toArray();
			li_list.push(li);

			li_list.sort((a, b) => {
				let a_uname = $(a).find('a').text();
				let b_uname = $(b).find('a').text();

				return a_uname.localeCompare(b_uname);
			});

			ul.empty();
			li_list.forEach(el => ul.append(el));
		}
	}

	function importUserList() {

		let fileinput = $('<input type="file">');

		fileinput.on('change', function () {
			let file = this.files[0];

			let reader = new FileReader();

			reader.onload = function () {
				let json = JSON.safeParse(atob(reader.result));

				if (json === undefined) {
					alert('ERR_MALFORMED_CONTENT');
					return;
				}

				let validUsers = [];

				Object.keys(json).forEach(key => {
					if (elementExists(`#user${key}`))
						return;

					validUsers.push([key, decodeURIComponent(json[key])]);
				});

				if (validUsers.length === 0)
					return;

				validUsers.sort((a, b) =>
					a[1].localeCompare(b[1])
				);

				let progress = $('#importProgress');
				progress.text(`0 / ${validUsers.length}`);
				progress.show();

				let completedRequests = 0;

				validUsers.forEach(([uid, uname]) => {
					let formData = new FormData($('#ignorelist_add_form')[0]);
					formData.set('username', uname);

					formData = Array.from(formData);
					let dataString = '';

					formData.forEach(([key, value]) => {
						dataString += `${key}=${escape(value)}&`;
					});

					dataString = dataString.slice(0, -1);

					let form = $('#ignorelist_change_form');
					form.show();

					let ajax = new XMLHttpRequest();

					ajax.open('POST', 'profile.php?do=updatelist&userlist=ignore', true);
					ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

					ajax.onreadystatechange = function () {
						if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

							progress.text(`(${uname}) ${++completedRequests} / ${validUsers.length}`);
							updateUserList(uid, uname);

							if (completedRequests === validUsers.length) {

								$('#ignorelist_checkall').change(function () {
									let state = this.checked;
									let checkboxes = $('input[type="checkbox"]').toArray();
									checkboxes.forEach(el => {
										el.checked = state;
									});
								});

								setTimeout(() => progress.hide(), 1000);
							}
						}
					};

					ajax.send(dataString);
				});

			};

			reader.readAsText(file);
			this.remove();
		});

		fileinput[0].click();
	}

	function insertCss() {
		MODULE.styles.set('input.button.tm', {
				'margin-left': '5px'
			})
			.set('#importProgress', {
				'float': 'right'
			});
	}

	function insertButtons() {

		let submit = $('.userlist_form_controls input[type="submit"]');
		let exportButton = $('<input type="button" class="button tm" value="Exportar"> ');
		let importButton = $('<input type="button" class="button tm" value="Importar"> ');
		let progress = $('<span id="importProgress"></span>');

		exportButton.on('click', exportUserList);
		importButton.on('click', importUserList);

		progress.insertAfter(submit);
		importButton.insertAfter(submit);
		exportButton.insertAfter(submit);

		progress.hide();
	}

	function setThreadVisibilityFromRoot(show = false) {

		MODULE.debug.log('setThreadVisibilityFromRoot');

		const USER_ID_LIST = Object.entries(getIgnoredUsersIdList())
			.map(a => parseInt(a[0]));

		const authors = $('.cajasnews a[href*="/foro/member"]');

		authors.each((i, author) => {
			const uid = parseInt(author.href.split('=').slice(-1)[0]);

			if (USER_ID_LIST.includes(uid)) {
				const parent = $(author).parent().parent();

				if (show)
					parent.show();
				else
					parent.hide();
			}
		});
	}

	function setThreadVisibilityFromForumdisplay(show = false) {

		MODULE.debug.log('setThreadVisibilityFromForumdisplay');

		const USER_ID_LIST = Object.entries(getIgnoredUsersIdList())
			.map(a => parseInt(a[0]));


		const authors = $('[id*=threadbits_forum] span[onclick]');

		authors.each((i, author) => {
			let uid = $(author).attr('onclick').split('=', 2)[1];
			uid = parseInt(uid.split("'")[0]);

			if (USER_ID_LIST.includes(uid)) {
				const parent = $(author).parent().parent().parent();

				if (show)
					parent.show();
				else
					parent.hide();
			}
		});
	}


	// refactorize this
	function setPostVisibility(show = false) {

		MODULE.debug.log('setPostVisibility');

		const iu_list = Object.entries(getIgnoredUsersIdList());

		const USER_ID_LIST = iu_list.map(a => parseInt(a[0]));
		const USERNAME_LIST = iu_list.map(a => a[1]);

		const quoteAuthors = $(Utils.isMobileVersion ?
			'div > strong:has(+a[href*="showthread.php?p="] > img)' :
			'td.alt2 > div > b:has(+a[href*="showthread.php?p="] > img)'
		);


		const postAuthors = $(Utils.isMobileVersion ?
			'.ui-link:not(.fpostuseravatarlink)' :
			'div[align="center"] div.smallfont + a'
		);

		MODULE.debug.log('do hide', postAuthors, quoteAuthors, USERNAME_LIST, USER_ID_LIST);

		// Hide ignored users posts
		postAuthors.each((i, authorLink) => {
			const user_id = parseInt(authorLink.href.split('=')[1]);

			if (USER_ID_LIST.includes(user_id)) {

				const element = $(authorLink).closest(Utils.isMobileVersion ?
					'ul' : 'div[align="center"]');

				MODULE.debug.log(`Ignored user post detected from ${authorLink.innerText} with id: ${user_id}`);


				if (show)
					element.show();
				else
					element.hide();
			}
		});

		// Delete ignored users quotes
		quoteAuthors.each((i, author) => {

			// get rid of possible xss
			let uname = author.innerText;
			const lowerUname = uname.trim().toLowerCase();

			// get rid of possible xss

			if (USERNAME_LIST.includes(lowerUname)) {
				MODULE.debug.log(`Ignored user quote detected from ${uname}`);

				const element = $(author).closest(Utils.isMobileVersion ?
					'ul' : 'div[align="center"]');

				if (show)
					element.show();
				else
					element.hide();
			}
		});

		// Just replace text
		quoteAuthors.each((i, author) => {

			// get rid of possible xss
			let uname = author.innerText;
			const lowerUname = uname.trim().toLowerCase();

			// get rid of possible xss

			if (USERNAME_LIST.includes(lowerUname)) {
				let td = author.parentElement.parentElement;
				let text = td.lastElementChild;

				uname = safehtml(uname);

				text.innerHTML = '<br>Este mensaje está oculto porque ' +
					`<b>${uname}</b> está en tu ` +
					`<a href="${FC_PATHS.ignorelist}" target="_blank">` +
					'lista de ignorados</a>';
			}
		});

	}

	MODULE.onload = function () {

		if ((PATH + URL_SEARCH) == FC_PATHS.ignorelist) {
			MODULE.config.set('UPDATE', true);
			MODULE.debug.log('Hitted ignored list url, update on next module load');

			window.addEventListener('load', function () {
				insertCss();
				insertButtons();
			});

		} else {

			switch (PATH) {
			case FC_PATHS.absolute_path:
				setThreadVisibilityFromRoot();
				break;

			case FC_PATHS.forumdisplay:
				setThreadVisibilityFromForumdisplay();
				break;

			case FC_PATHS.showthread:
				setPostVisibility(!MODULE.config.get('HIDE_IU_POSTS'))
				break;
			default:
				break;
			}
		}
	}

	MODULE.onunload = function () {

		if ((PATH + URL_SEARCH) !== FC_PATHS.ignorelist) {
			switch (PATH) {
			case FC_PATHS.absolute_path:
				setThreadVisibilityFromRoot(true);
				break;

			case FC_PATHS.forumdisplay:
				setThreadVisibilityFromForumdisplay(true);
				break;

			case FC_PATHS.showthread:
				setPostVisibility(true)
				break;
			default:
				break;
			}
		}
	}

	return MODULE;
})(jQuery);
