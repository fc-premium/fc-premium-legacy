import { Urls } from './urls'
import { Utils } from './utils'
import { User } from './user'
import { Thread } from './thread'

export class FC extends Utils {
	static readonly Urls = Urls;
	static readonly Utils = Utils;

	static async getUserData(id: number) {
		return new User(id).get();
	}

	static async getThreadData(id: number) {
		return new Thread(id).get();
	}
}
