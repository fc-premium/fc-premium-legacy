import { BasicUser } from './user'

export class PrivateMessage {


	public readonly id: number;
	public readonly recipient: BasicUser;
	public readonly title: string;
	public readonly content: string;

	constructor() {

	}

	public await send();
}
