import { Urls } from './urls'
import { Utils } from './utils'
import { Dynamic } from './dynamic'

export type UserID = number;
export type Nickname = string;

class UserAbouts {
	public car: string = null;
	public place: string = null;
	public interests: string = null;
	public occupation: string = null;
	public signature: string = null;
}

class UserStats {
	public messageCount: number = null;
	public signupDate: Date = null;
	public lastActivity: Date = null;

	public get messagesPerDay(): number {
		if (this.messageCount === null || this.signupDate === null)
			return null;

		const msSinceSignUp = Date.now() - this.signupDate.getTime();

		return this.messageCount / (msSinceSignUp / 1000 / 60 / 60 / 24);
	}
}

// TODO:
// public async findUserMessages() { }
// public async findUserPosts() { }
export class User extends Dynamic {
	public readonly id: UserID;

	public exists: boolean = true;

	public nickname: Nickname = null;
	public avatar: HTMLImageElement = null;
	public isConnected: boolean = null;
	public title: string = null;

	public readonly stats: UserStats = new UserStats();
	public readonly about: UserAbouts = new UserAbouts();

	public error: string = null;

	public constructor(id: UserID, update: boolean = true) {
		super();
		this.id = id;

		if (update)
			this.update();
	}

	public async update(): Promise<this> {

		if (this.__loading === true || this.exists === false)
			return this;

		this.__loading = true;

		return fetch(`${Urls.user}${this.id}&simple=1`)
			.then(Utils.responseToHtml)
			.then(html => {
				const errorMessage = <HTMLElement>html.querySelector('.panelsurround');

				if (errorMessage !== null) {
					this.error = errorMessage.innerText.trim();
					this.exists = false;
				} else {

					// Get basic user info

					this.nickname = (<HTMLElement>html.querySelector('#username_box > h1')).innerText.trim();

					this.avatar = <HTMLImageElement>html.querySelector('img.avatar');

					this.isConnected = (<HTMLElement>html.querySelector('#username_box img'))
						.getAttribute('src').search('online') >= 0;

					this.title = (<HTMLElement>html.querySelector('#username_box > h2')).innerText.trim();


					// Get User Stats

					let tempData: any = Array.from(html.querySelectorAll('.statistics_group .shade'))
						.map((span) => {
							const li = <HTMLElement>span.parentNode;

							let x = li.innerText.split(':');
							return [
								Utils.removeTildesFromString(x[0]).trim(),
								x.slice(1).join(':')
							];
						});

					tempData = Object.fromEntries(tempData);

					this.stats.messageCount = parseInt(tempData['Mensajes Total'].replace('.', ''));
					// this.messagesPerDay = parseFloat(tempData['Mensajes / Dia'].replace(',', '.'));

					const lastActivity = Utils.parseFCDate(tempData['Ultima Actividad']);
					this.stats.lastActivity = isNaN(lastActivity.getTime()) ?
						null : lastActivity;

					const signupDate = Utils.parseFCDate(tempData['Fecha de Registro']);
					this.stats.signupDate = isNaN(signupDate.getTime()) ?
						null : signupDate;

					// Get User Abouts

					tempData = Array.from(html.querySelectorAll('.list_no_decoration .profilefield_list > *'))
						.map((element: HTMLElement, index: number) => {
							let value: string;

							if (index % 2 === 0) {
								value = Utils.removeTildesFromString(element.innerText);
							} else {
								value = element.childNodes[0].nodeValue;
							}

							return value.trim();
						}).map((value: string, index: number, self: string[]) => { // Group by pairs
							return index % 2 === 0 ?
								[value, self[index + 1]] : undefined;
						}).filter(x => x !== undefined);

					tempData = Object.fromEntries(tempData);

					this.about.car = tempData.hasOwnProperty('Coche') ?
						tempData['Coche'] : null;

					this.about.place = tempData.hasOwnProperty('Lugar') ?
						tempData['Lugar'] : null;

					this.about.interests = tempData.hasOwnProperty('Intereses') ?
						tempData['Intereses'] : null;

					this.about.occupation = tempData.hasOwnProperty('Ocupacion') ?
						tempData['Ocupacion'] : null

					this.about.signature = (<HTMLElement>html.querySelector('#signature'))
						.innerHTML.trim();
				}

				this.__loading = false;

				return this;
			}).catch(() => {
				this.__loading = false
				return this;
			});
	}
}

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
		let id: UserID, nickname: Nickname;

		if (html.hasAttribute('userid')) {
			id = parseInt(html.getAttribute('userid'));
		} else if (html.hasAttribute('href')) {
			id = parseInt(html.getAttribute('href').split('=')[1]);
		} else {
			throw new Error('HTML tag is not valid');
		}

		nickname = html.innerText;

		return new BasicUser(id, nickname);
	}
}

/**
 * A class to handle the current logged in user
 */
export class CurrentUser extends User {
	public id: UserID;

	constructor() {
		super(null, false);
		const self = this;

		(async function() {
			self.id = await Utils.getCurrentUserId();

			await self.update();
		})();
	}

	public async getIgnoredUsersList(): Promise<BasicUser[]> {
		return fetch(Urls.ignoreList)
			.then(Utils.responseToHtml)
			.then((html: HTMLDocument) => {
				const ignoredUserTagList = html.querySelectorAll<HTMLElement>('.userlist [href*="member.php?u="]');

				return Array.from(ignoredUserTagList).map(tag =>
					BasicUser.fromHTML(tag)
				)
			});
	}

	public async ignoreUsers(userIds: UserID | UserID[]): Promise<Response> {
		if (typeof userIds === 'number')
			userIds = [userIds];

		const currentIgnoredUsers = await this.getIgnoredUsersList();

		const updateForm = new FormData();
		updateForm.set('s', '');
		updateForm.set('securitytoken', await Utils.getSecurityToken());

		// Add current ignored users
		currentIgnoredUsers.forEach((user => {
			const id: UserID = user.id;

			updateForm.set(`listbits[ignore][${id}]`, id.toString());
			updateForm.set(`listbits[ignore_original][${id}]`, id.toString());
		}));

		// Add new ignored users
		userIds.forEach((id: UserID) => {
			updateForm.set(`listbits[ignore][${id}]`, id.toString());
			updateForm.set(`listbits[ignore_original][${id}]`, id.toString());
		});

		return fetch(`${Urls.profile}?do=updatelist&userlist=ignore`, {
			method: 'POST',
			body: updateForm
		});
	}
}
