import { Urls } from './urls'
import { User, BasicUser, CurrentUser, ID, Nickname } from './user'

export class Utils {

	private static __userid__: number = null;

	static removeTildesFromString(value: string): string {
		return value.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, "");
	}

	static utf8ToIso(arrayBuffer: ArrayBuffer) {
		let encoder = new TextDecoder("ISO-8859-1");
		arrayBuffer = new Uint8Array(arrayBuffer);
		return encoder.decode(arrayBuffer);
	}

	static parseHTML(text: string): HTMLDocument {
		return (new DOMParser()).parseFromString(text, "text/html");
	}

	static responseToHtml(response: Response) {
		return response.arrayBuffer()
			.then(Utils.utf8ToIso)
			.then(Utils.parseHTML);
	}

	static parseFCDate(str_date: string | string[]): Date {

		const msInADay = 1000 * 60 * 60 * 24;

		if (typeof str_date !== 'string') {
			let invalid = new Date();
			invalid.setTime(NaN)
			return invalid;
		}

		str_date = str_date.split(',')
			.map(s => s.trim());

		const monthsTranslations = {
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

		// Pre set to today at 00:00
		date.setTime(
			Math.floor(Date.now() / msInADay) * msInADay +
			(date.getTimezoneOffset() * 1000 * 60)
		);

		if ((str_date[0] === 'Ayer')) {
			date.setTime(date.getTime() - msInADay);
		} else if (str_date[0] !== 'Hoy') {
			tarr = str_date[0].split('-');
			tarr[1] = monthsTranslations[tarr[1]];

			date = new Date(Date.parse(tarr.join('-')));
		}

		// work with hour, seconds
		if (str_date.length > 1) {
			let hour = Date.parse(`1-1-1970 ${str_date[1]} GMT`);

			date.setTime(date.getTime() + hour - (new Date().getTimezoneOffset()));
		}

		return date;
	}

	static async getCurrentUserId(force_update: boolean = false): Promise<number> {
		const hasLoggedIn = new Set(document.cookie.split(';').map(x => x.split('=')[0])).has('bbsessionhash');

		if (!hasLoggedIn)
			return -1;

		if (Utils.__userid__ !== null && force_update !== true)
			return Utils.__userid__;

		return fetch(Urls.usercp)
			.then(Utils.responseToHtml)
			.then(html => {
				const anchor = html.querySelector('a[href^="member.php?u"]');

				// Anchor not found
				if (anchor !== null) {
					let uid = anchor.getAttribute('href');

					if (uid !== undefined)
						uid = uid.split('=')[1];

					Utils.__userid__ = parseInt(uid)
				}

				return Utils.__userid__;
			});
	}

	static getCurrentUser() {
		return new CurrentUser();
	}

	static async getSecurityToken(): Promise<string> {
		const TOKEN = <string>(<any>window).SECURITYTOKEN;

		if (typeof TOKEN === 'string') {
			return TOKEN;
		} else {
			return fetch(Urls.onlineusers)
				.then(Utils.responseToHtml)
				.then(html => {
					return html.querySelector<HTMLInputElement>('[name="securitytoken"]').value;
				});
		}
	}

	static async searchForPartialNickname(nicknameFragment: Nickname): Promise<BasicUser[]> {

		const form = new FormData();

		form.set('do', 'usersearch');
		form.set('fragment', nicknameFragment);
		form.set('securitytoken', await Utils.getSecurityToken()); // 1565005787-9fb1951b8ca0c6391e55bfdd55cb824a295989f4

		return fetch(Urls.usersearch, {
			method: 'POST',
			body: form
		}).then(Utils.responseToHtml)
			.then(xml => {
				const userTags = Array.from(xml.querySelectorAll<HTMLElement>('user'));

				return userTags.map((userTag: HTMLElement) => {
					return BasicUser.fromHTML(userTag);
				});
			});
	}
}
