import { Urls } from '../urls'
import { Utils } from '../utils'
import { FC } from '../index'

import { UserID } from './constants'
import { User } from './user'
import { BasicUser } from './basic-user'

/**
 * A class to handle the current logged in user
 */
export class CurrentUser extends User {
	public id: UserID;

	constructor() {
		super(null, false);
		const self = this;

		(async function() {
			self.id = await FC.getCurrentUserId();

			await self.update();
		})();
	}

	public async getIgnoredUserList(): Promise<BasicUser[]> {
		return fetch(Urls.ignoreList.href)
			.then(Utils.responseToHtml)
			.then((html: HTMLDocument) => {
				const ignoredUserTagList = html.querySelectorAll<HTMLElement>('.userlist [href*="member.php?u="]');

				return Array.from(ignoredUserTagList).map(tag =>
					BasicUser.fromHTML(tag)
				);
			});
	}

	public async getContactList(): Promise<BasicUser[]> {
		return fetch(Urls.contactList.href)
			.then(Utils.responseToHtml)
			.then((html: HTMLDocument) => {
				const contactUserList = html.querySelectorAll<HTMLElement>('.userlist [href*="member.php?u="]');

				return Array.from(contactUserList).map(tag =>
					BasicUser.fromHTML(tag)
				);
			});
	}

	public async unignoreUsers(userIds: UserID | UserID[]): Promise<HTMLDocument> {

		const userIdList: UserID[] = typeof userIds === 'number' ?
			[userIds] : userIds

		const currentIgnoredUsers = await this.getIgnoredUserList();

		const updateForm = new FormData();

		updateForm.set('s', '');
		updateForm.set('do', 'updatelist');
		updateForm.set('userlist', 'ignore');
		updateForm.set('securitytoken', await FC.getSecurityToken());

		// Add current ignored users
		currentIgnoredUsers.forEach((user => {
			const id: UserID = user.id;

			if (!userIdList.includes(id)) {
				updateForm.set(`listbits[ignore][${id}]`, id.toString());
			} else {
				console.log('Ignored', id);
			}

			updateForm.set(`listbits[ignore_original][${id}]`, id.toString());
		}));

		const f: Promise<HTMLDocument> = <Promise<HTMLDocument>>(fetch(`${Urls.profile.href}?do=updatelist&userlist=ignore`, {
			method: 'POST',
			body: updateForm
		}).then(Utils.responseToHtml).catch((e) => console.error(e)));

		console.log(await f);

		return f;
	}
}
