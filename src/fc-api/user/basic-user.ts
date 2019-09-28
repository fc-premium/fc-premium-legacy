import { UserID, Nickname } from './constants'
import { User } from './user'

export class BasicUser {

	public readonly id: UserID = null;
	public readonly nickname: Nickname = null;

	constructor(id: UserID = null, nickname: Nickname = null) {
		this.id = id;
		this.nickname = nickname.trim();
	}

	getUser(update: boolean = true) {
		return new User(this.id, update);
	}

	static fromHTML(html: HTMLElement) {
		const id: UserID = (function(): UserID {
			if (html.hasAttribute('userid'))
				return parseInt(html.getAttribute('userid'));

			if (html.hasAttribute('href'))
				return parseInt(html.getAttribute('href').split('=')[1]);

			throw new Error('HTML tag is not valid');
		})();

		const nickname: Nickname = html.innerText;

		return new BasicUser(id, nickname);
	}
}
