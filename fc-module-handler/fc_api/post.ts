import { Utils } from './utils'
// import { Urls } from './urls'
import { Dynamic } from './dynamic'

export class Post extends Dynamic {
	public id: number = null;
	public threadId: number = null;
	public ownerId: number = null;

	public number: number = null;

	public content: string = null;

	public creationDate: Date = null;
	public editDate: Date = null;

	constructor(number: number, update: boolean = true) {
		super();

		this.number = number;

		if (update)
			this.update();
	}

	/**
	 * Fetch post and update properties
	 * @return [description]
	 */
	public async update(): Promise<this> {
		// TODO: 
		return this;
	}

	/**
	 * Given a post table element, extract and update object properties
	 * @param {HTMLElement} html A post table html tag
	 * @return {this}
	 */
	public updateFromHTML(html: HTMLElement): this {
		if (html.tagName !== 'TABLE' || !html.id.startsWith('post'))
			throw 'No a valid post';

		this.id = parseInt(html.id.slice(4));
		this.threadId = parseInt((/t\=([\d]+)/).exec(
			html.querySelector<HTMLAnchorElement>('[href^="showthread.php?t="]').href
		)[1]);

		this.ownerId = parseInt(html.querySelector<HTMLAnchorElement>('.bigusername').href.split('=')[1]);

		this.number = parseInt(html.querySelector<HTMLAnchorElement>('[id^="postcount"]').name);

		this.content = html.querySelector<HTMLElement>('[name="HOTWordsTxt"] > div').outerHTML;

		this.creationDate = Utils.parseFCDate(html.querySelector<HTMLAnchorElement>('td.thead').innerText);
		this.editDate = (function() {
			const editPhrase = html.querySelector<HTMLElement>('td[class^="alt1"][valign="bottom"] em');

			if (editPhrase === null) // No edition made
				return null;

			let fcDateString = editPhrase.innerText.split('fecha: ')[1]
				.replace(' a las', ',').slice(0, -1);

			return Utils.parseFCDate(fcDateString);
		})();

		return this;
	}

	/**
	 * Create a new Post object directly from a HTML post table
	 * @param  html [description]
	 * @return      [description]
	 */

	static fromHTML(html: HTMLElement): Post {
		return new Post(null, false).updateFromHTML(html);
	}
}
