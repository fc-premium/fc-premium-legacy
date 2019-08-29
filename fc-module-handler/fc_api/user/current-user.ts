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

	public async getIgnoredUsersList(): Promise<BasicUser[]> {
		return fetch(Urls.ignoreList)
			.then(Utils.responseToHtml)
			.then((html: HTMLDocument) => {
				const ignoredUserTagList = html.querySelectorAll<HTMLElement>('.userlist [href*="member.php?u="]');

				return Array.from(ignoredUserTagList).map(tag =>
					BasicUser.fromHTML(tag)
				);
			});
	}

	public async ignoreUsers(userIds: UserID | UserID[]): Promise<Response> {
		if (typeof userIds === 'number')
			userIds = [userIds];

		const currentIgnoredUsers = await this.getIgnoredUsersList();

		const updateForm = new FormData();
		updateForm.set('s', '');
		updateForm.set('securitytoken', await FC.getSecurityToken());

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
