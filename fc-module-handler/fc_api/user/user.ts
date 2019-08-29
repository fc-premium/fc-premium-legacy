import { Urls } from '../urls'
import { Utils } from '../utils'
import { Dynamic, DynamicLock } from '../dynamic'

import { UserStats } from './user-stats'
import { UserAbouts } from './user-abouts'
import { UserID, Nickname } from './constants'

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

	@DynamicLock
	public async update(): Promise<this> {

		if (this.exists === false)
			return this;

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

				return this;
			}).catch(() => {
				return this;
			});
	}
}
