import { Urls } from './urls'
import { Utils } from './utils'
import { Thread } from './thread'
import { User, BasicUser, CurrentUser, Nickname } from './user'

export class FC {

	private static __userid__: number = null;

	static readonly Urls = Urls;
	static readonly Utils = Utils;

	static async getUserData(id: number): Promise<User> {
		return new User(id).get();
	}

	static async getThreadData(id: number): Promise<Thread> {
		return new Thread(id).get();
	}

	static async getCurrentUserId(force_update: boolean = false): Promise<number> {
		const hasLoggedIn = new Set(document.cookie.split(';').map(x => x.split('=')[0]))
			.has('bbsessionhash');

		if (!hasLoggedIn)
			return -1;

		if (FC.__userid__ !== null && force_update !== true)
			return FC.__userid__;

		return fetch(Urls.usercp.href)
			.then(Utils.responseToHtml)
			.then(html => {
				const anchor = html.querySelector('a[href^="member.php?u"]');

				// Anchor not found
				if (anchor !== null) {
					let uid = anchor.getAttribute('href');

					if (uid !== undefined)
						uid = uid.split('=')[1];

					FC.__userid__ = parseInt(uid)
				}

				return FC.__userid__;
			});
	}

	static async getCurrentUser(): Promise<CurrentUser> {
		return new CurrentUser().get();
	}

	static async getSecurityToken(): Promise<string> {
		const TOKEN = <string>(<any>window).SECURITYTOKEN;

		if (typeof TOKEN === 'string') {
			return TOKEN;
		} else {
			return fetch(Urls.onlineUsers.href)
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
		form.set('securitytoken', await FC.getSecurityToken()); // 1565005787-9fb1951b8ca0c6391e55bfdd55cb824a295989f4

		return fetch(Urls.userSearch.href, {
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
