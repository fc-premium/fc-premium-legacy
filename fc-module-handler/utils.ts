// TODO: change Promises like:
//
// new Promise((a, b) => {
// 	let x = setInterval(function () {
// 		if (errors !== false) {
// 			clearInterval(x);
// 			a([g_html, errors]);
// 		}
// 	})
// })

// TODO: Use utils. methods inside other methods to prevent over code

String.prototype.removeTildes = function() {
	return this.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, "");
};

FormData.prototype.toDataString = function() {
	return Array.from(this).reduce((a, b) =>
		(typeof a == 'string' ? `${a}&` : `${a[0]}=${escape(a[1])}&`) +
		`${b[0]}=${escape(b[1])}`
	);
};

Array.prototype.binarySearch = function(value: any, valueGetter: Function = null, comp: Function = null): number {
	let lastPos = 0;
	let pos = Math.round(this.length / 2);
	let foundAt = -1;

	valueGetter = typeof valueGetter !== 'function' ?
		(v: any) => v : valueGetter;

	comp = typeof comp !== 'function' ?
		(a: any, b: any) => a - b : comp;

	while (foundAt == -1 && pos < this.length) {
		let v = valueGetter(this[pos]);

		let r = comp(v, value);

		if (r < 0) {
			pos += Math.round((lastPos + pos) / 2);
		} else if (r > 0) {
			pos -= Math.round((lastPos + pos) / 2);
		} else {
			foundAt = pos;
		}

		lastPos = pos;
	}

	return foundAt;
};

JSON.safeParse = (json: any) => {

	try {
		json = JSON.parse(json);
	} catch (e) {
		json = undefined;
	}

	return json;
};

$.expr[':'].icontains = function(a, i, m) {
	return jQuery(a).text().toUpperCase()
		.indexOf(m[3].toUpperCase()) >= 0;
};

class _Utils {
	public urls = {
		thread: 'https://www.forocoches.com/foro/showthread.php?t=',
		post: 'https://www.forocoches.com/foro/showthread.php?p=',
		deletePost: 'https://www.forocoches.com/foro/editpost.php',
		user: 'https://www.forocoches.com/foro/member.php?u=',
		quote: 'https://www.forocoches.com/foro/newreply.php?do=newreply&p=',
		newPost: 'https://www.forocoches.com/foro/newreply.php?do=postreply&t=',
		private: 'https://www.forocoches.com/foro/private.php',
		ignoreList: 'https://www.forocoches.com/foro/profile.php?do=ignorelist',
		usercp: 'https://www.forocoches.com/foro/usercp.php?'
	};

	private _isMobileVersion: boolean = location.host.split('.')[0] === 'm';
	private __userid__: number;

	constructor() { }

	utf8ToIso(arrayBuffer: ArrayBuffer) {
		let encoder = new TextDecoder("ISO-8859-1");
		arrayBuffer = new Uint8Array(arrayBuffer);
		return encoder.decode(arrayBuffer);
	}

	parseHTML(text: string) {
		return (new DOMParser()).parseFromString(text, "text/html");
	}

	responseToHtml(response: Response) {
		return response.arrayBuffer()
			.then(Utils.utf8ToIso)
			.then(Utils.parseHTML);
	}

	get isMobileVersion() {
		return this._isMobileVersion;
	}

	parseFCDate(str_date: string | string[]) {

		const msInADay = 1000 * 60 * 60 * 24;

		if (typeof str_date !== 'string') {
			let invalid = new Date();
			invalid.setTime(NaN)
			return invalid;
		}

		str_date = str_date.trim().split(' ');

		let months = {
			'ene': 'jan',
			'feb': 'feb',
			'mar': 'mar',
			'abr': 'apr',
			'may': 'may',
			'jun': 'jun',
			'jul': 'jul',
			'ago': 'aug',
			'sep': 'sep',
			'oct': 'oct',
			'nov': 'nov',
			'dic': 'dec'
		};


		// work with day, month, year
		let tarr: string[];
		let date = new Date();

		// Pre set to today
		date.setTime(Math.floor(Date.now() / msInADay) * msInADay);

		if ((str_date[0] === 'Ayer')) {
			date.setTime(date.getTime() - msInADay);
		} else if (str_date[0] !== 'Hoy') {
			tarr = str_date[0].split('-');
			tarr[1] = months[tarr[1]];

			date = new Date(Date.parse(tarr.join('-')));
		}


		// work with hour, seconds
		if (str_date.length > 1) {
			let hour = Date.parse(`1-1-1970 ${str_date[1]} GMT`);

			date.setTime(date.getTime() + hour);
		}

		return date;
	}

	getUserData(id: number | string) {

		let self = this;

		return fetch(`${self.urls.user}${id}`)
			.then(self.responseToHtml)
			.then(html => {
				let data = {
					messageCount: null,
					messagesPerDay: null,
					signupDate: null,
					lastActivity: null
				};

				const messageError = $(html).find('.panelsurround');

				if (messageError.length != 0) {
					let tempData = $(html).find('.statistics_group .shade')
						.parent().toArray()
						.map((a) => {
							let x = (<HTMLElement><unknown>a).innerText.split(':');
							return [
								x[0].removeTildes().trim(),
								x.slice(1).join(':')
							];
						});

					tempData = Object.fromEntries(tempData);

					data.messageCount = parseInt(tempData['Mensajes Total'].replace('.', ''));
					data.messagesPerDay = parseFloat(tempData['Mensajes / Dia'].replace(',', '.'));

					data.lastActivity = self.parseFCDate(tempData['Ultima Actividad']);
					data.lastActivity = isNaN(data.lastActivity.getTime()) ?
						null : data.lastActivity;

					data.signupDate = self.parseFCDate(tempData['Fecha de Registro']);
					data.signupDate = isNaN(data.signupDate.getTime()) ?
						null : data.signupDate;
				}

				return data
			});
	}

	getCurrentUserId() {
		let html, uid;

		if (this.__userid__ !== null)
			return this.__userid__;

		$.ajax({
			type: 'GET',
			url: `https://www.forocoches.com/foro/usercp.php`,
			success: function(e) {
				html = (new DOMParser()).parseFromString(e, "text/html");
			},
			async: false
		});

		let anchor = $(html).find('a[href^="member.php?u"]');

		uid = $(anchor[0]).attr('href');

		if (uid !== undefined)
			uid = uid.split('=')[1];


		this.__userid__ = parseInt(uid)

		return this.__userid__;
	}

	checkThreadIsEchenique(threadHTML: string | HTMLElement) {
		let messageError = (<HTMLElement><unknown>$(<unknown>threadHTML).find('.panelsurround')[0])
			.innerText.trim()
			.removeTildes();

		return messageError === 'Ningun Tema especificado.' ||
			messageError === "Tema especificado invalido.";
	}

	checkThreadsOwner(threadHTML) {
		let anchor = $(threadHTML).find('.bigusername')[0];
		let ownerUserId = parseInt($(anchor).attr('href').split('=')[1]);

		return ownerUserId;
	}

	postMessage(threadId, message) {

		const userId = this.getCurrentUserId();
		let self = this;


		return fetch(`${this.urls.thread}${threadId}`)
			.then(this.responseToHtml)
			.then(html => {
				let token = $(html).find('[name*="token"]')[0].value;
				let fdata = new FormData();

				let errors = false;
				let g_html = false;

				fdata.set('securitytoken', token);
				fdata.set('do', 'postreply');
				fdata.set('loggedinuser', userId);
				fdata.set('message', message);

				$.ajax({
					type: "POST",
					url: `${self.urls.newPost}${threadId}`,
					data: fdata.toDataString(),
					success: function(html) {
						g_html = html;
						errors = $(html).find('error').toArray();
					}
				});

				return new Promise((a, b) => {
					let x = setInterval(function() {
						if (errors !== false) {
							clearInterval(x);
							a([g_html, errors]);
						}
					})
				})
			});
	}

	deletePost(post_id: string | number, reason = '') {

		return fetch(`${this.urls.post}${post_id}`)
			.then(this.responseToHtml)
			.then(html => {
				let token = $(html).find('[name*="token"]')[0].value;

				let fdata = new FormData();
				fdata.set('securitytoken', token);
				fdata.set('do', 'deletepost');
				fdata.set('s', '');
				fdata.set('postid', <string>post_id);
				fdata.set('deletepost', 'delete');
				fdata.set('reason', reason);

				return $.ajax({
					type: "POST",
					url: this.urls.deletePost,
					data: fdata.toDataString(),
				});

			});
	}

	sendPrivateMessage(recipient, title, message) {

		let self = this;

		return fetch(`${this.urls.private}?do=newpm`)
			.then(this.responseToHtml)
			.then(html => {
				return [html, $(html).find('[name*="token"]')[0].value];
			})
			.then(([html, token]) => {

				let fdata = new FormData();
				fdata.set('securitytoken', token);
				fdata.set('recipients', recipient);
				fdata.set('title', title);
				fdata.set('message', message);
				fdata.set('wysiwyg', 0);
				fdata.set('iconid', 0);
				fdata.set('s', '');
				fdata.set('do', 'insertpm');
				fdata.set('pmid', '');
				fdata.set('forward', '');
				fdata.set('sbutton', '');
				fdata.set('savecopy', 1);
				fdata.set('signature', 1);
				fdata.set('parseurl', 1);

				let g_html = false;
				let errors = false;

				$.ajax({
					type: "POST",
					url: `${self.urls.private}?do=insertpm&pmid=`,
					data: fdata.toDataString(),
					success: function(html) {
						g_html = html;
						errors = $(html).find('error').toArray();
					}
				});

				return new Promise((a, b) => {
					let x = setInterval(function() {
						if (errors !== false) {
							clearInterval(x);
							a([g_html, errors]);
						}
					})
				});
			});
	}

	getThreadFromPostId(post_id) {
		return fetch(`https://www.forocoches.com/foro/showthread.php?p=${post_id}`)
			.then(this.responseToHtml)
			.then(html => {
				let url = $(html).find(`[id*="postcount"]`)[0].href;
				return parseInt((new URL(url)).searchParams.get('t'));
			});
	}

	getMessagesFromThread(id, page = 1) {
		let self = this;
		return fetch(`${self.urls.thread}${id}&page=${page}`)
			.then(this.responseToHtml)
			.then(html => {
				return $(html).find('#posts div[align="center"] table[id^="post"]')
					.toArray().slice(1)
					.map(table => {
						let tds = $(table).find('td');
						let user_el = $(tds[2]).find('.bigusername')[0];
						let content = $(table).find('[id*="post_message"]')[0].outerHTML.trim();

						return {
							messageId: parseInt(table.id.slice(4)),
							uid: parseInt(user_el.href.split('=')[1]),
							username: user_el.innerText.trim(),
							content: content,
						}
					})
			});
	}

	getPagesFromThread(threadHTML) {
		let text = $(threadHTML).find('.pagenav .vbmenu_control');
		if (text.length !== 0) {
			text = text[0].innerText.trim();
			text = text.split(' ');
		} else {
			text = [0, 1, 0, 1];
		}

		return [text[1], text[3]]
			.map(s => parseInt(s));
	}

	getThreadById(thread_id, page = 1) {

		let self = this;

		let html;
		$.ajax({
			type: 'GET',
			url: `${self.urls.thread}${thread_id}&page=${page}`,
			success: function(e) {
				html = (new DOMParser()).parseFromString(e, "text/html");
			},
			async: false
		});
		return html;
	}

	getIgnoredUserList() {
		return fetch(this.urls.ignoreList)
			.then(this.responseToHtml)
			.then(html => {
				let inputs = $(html).find('#ignorelist input[type="checkbox"]').toArray();
				inputs = inputs.filter(input => input.checked);

				let ignoredUsers = {};

				if (inputs.length > 0) {

					inputs.forEach(input => {
						let user_id = input.value;
						let username = input.parentElement
							.innerText.trim();

						ignoredUsers[user_id] = username;
					});
				}

				return ignoredUsers;
			});
	}

	getMnQFromMessage(message) {
		let mentions = [];
		let quotes = [];

		try {
			mentions = $(message).find('b>a[href*="/member.php?u="]')
				.toArray()
				.map(el => [
					parseInt(el.href.split('=')[1]),
					el.innerText.trim()
				]);
		} catch (e) {
			console.log(e);
			mentions = [];
		}

		$('div.smallfont ~ table').toArray().map(el => {
			return {
				username: $(el).find('div b')[0].innerText.trim(),
				postId: parseInt($(el).find('div b ~ a')[0].href.split('=')[1]),
				content: $(el).find('div ~ div')[0].outerHTML
			}

		})

		try {
			quotes = $(message).find('div.smallfont ~ table')
				.toArray().map(el => {
					return {
						username: $(el).find('div b')[0].innerText.trim(),
						postId: parseInt($(el).find('div b ~ a')[0].href.split('=')[1]),
						content: $(el).find('div ~ div')[0].outerHTML
					}
				});
		} catch (e) {
			quotes = [];
		}

		return {
			mentions,
			quotes
		};
	}

	getNotifications() {
		return fetch(this.urls.usercp)
			.then(this.responseToHtml)
			.then(html => {
				html = $(html);

				let data = {
					pmCount: null,
					mentionsCount: null,
					quotesCount: null
				}

				let temp = html.find('strong + div:has(a[href="private.php?"])').text();

				data.pmCount = parseInt(temp.split(':')[1].trim().split(' ')[0]);

				temp = html.find('[href="/foro/usertag.php?do=profilenotif&tab=mentions"] span');
				data.mentionsCount = parseInt(temp[0].innerText);

				temp = html.find('[href="/foro/usertag.php?do=profilenotif&tab=quotes"] span');
				data.quotesCount = parseInt(temp[0].innerText);

				return data;
			});
	}
}

export const Utils = new _Utils();
// unsafeWindow.Utils = Utils;

/*
function monitorNotifications() {
	if (Values.monitorIntervalId !== null) {
		clearInterval(Values.monitorIntervalId);
		Values.monitorIntervalId = null;
	}

	let lastPage = -1;
	let lastPost = -1;
	let firstExec = true;

	let html;
	let n_count;
	let quotes;
	let mentions;

	let intervalFunction = function () {
		if (!firstExec) {
			if (PE.buttons.start === null) return;
			if (PE.buttons.start.attr == undefined) return;
			if (PE.buttons.start.attr('state') != '1') {
				// It must be started
				return;
			}
		}

		let threadId = Values.workingThread;
		let randomId = Math.random();

		let currentFetch = fetch(`${FC_URL.thread}${threadId}`)
			.then(this.responseToHtml)
			.then(html => {
				let [currentPage, totalPages] = getPagesFromThread(html);
				let lastFetch = fetch(`${FC_URL.thread}${threadId}&page=${currentPage}`);

				let cint = function () {
					lastPage = currentPage;
					getMessagesFromThread(threadId, currentPage)
						.then(messages => {
							console.groupCollapsed(`Page ${currentPage}`);

							messages.forEach(message => {
								console.groupCollapsed(`messageId => ${message.messageId}`);
								message.forEach((key, value) => {
									if (key !== 'messageId') {
										if (key !== 'content') {
											console.log(`\t${key} => ${value}`);
										} else {
											let {
												mentions,
												quotes
											} = getMnQFromMessage(value);

											if (mentions.length > 0) {
												console.groupCollapsed(`Mentions`);
												mentions.forEach(m => {
													console.log(`\t\t${JSON.stringify(m)}`);
												})
												console.groupEnd();
											}

											if (quotes.length > 0) {
												console.groupCollapsed(`Quotes`);
												quotes.forEach(m => {
													console.log(`\t\t${JSON.stringify(m)}`);
												})
												console.groupEnd();
											}
										}
									}
								});
								console.groupEnd();
							});
							console.groupEnd();

							if (currentPage < totalPages) {
								currentPage += 1;
								setTimeout(cint, 100);
							}
						})
				};

				cint();
			})

		return currentFetch;
	};
	//
	// intervalFunction() //.then(intervalFunction);
	Values.monitorIntervalId = setInterval(intervalFunction, 10000);
}
*/
