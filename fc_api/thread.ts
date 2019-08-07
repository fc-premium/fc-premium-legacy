import { Urls } from './urls'
import { Utils } from './utils'
import { Dynamic } from './dynamic'
import { Post } from './post'
import { User, BasicUser, UserID, Nickname } from './user'

export type PostCountByUser = Map<BasicUser, number>;

export class Thread extends Dynamic {
	public readonly id: number;
	public authorId: number = null;
	public zoneId: number = null;
	public title: string = null;
	public creationDate: Date = null;

	public postCount: number = null;
	public get pageCount(): number {
		return Math.ceil(this.postCount / Thread.DEFAULT_POSTS_PER_PAGE);
	}

	public exists: boolean = true;
	public error: string = null;

	public static readonly DEFAULT_POSTS_PER_PAGE = 30;
	public static readonly MAX_POSTS_PER_PAGE = 60;

	public constructor(id: number, update: boolean = true) {
		super();

		this.id = id;

		if (update)
			this.update();
	}

	private updateFromHTML(html: HTMLDocument): void {
		const errorPanel = html.querySelector<HTMLElement>('.panelsurround');
		const errorOccurred = errorPanel !== null &&
			errorPanel.querySelector('textarea') === null && /// TODO: ??
			document.querySelector('.panelsurround').querySelector('fieldset') === null; // Is not a survey

		if (errorOccurred === true) {
			this.error = errorPanel.innerText.trim();
			this.exists = false;
		} else {
			if (this.authorId === null) {
				this.authorId = parseInt(html.querySelector('.bigusername').getAttribute('href').split('=')[1]);
				this.zoneId = parseInt(html.querySelector('.navbar + .navbar + .navbar >[href*="forumdisplay.php?f="]')
					.getAttribute('href').split('=')[1]);

				this.creationDate = Utils.parseFCDate(html.querySelector<HTMLElement>('[id*="post"] td.thead').innerText);
			}

			this.title = html.querySelector<HTMLElement>('.cmega').innerText;

			let navNext = html.querySelector<HTMLElement>('.pagenav .mfont');

			if (navNext !== null) {
				// Get number of posts from title
				this.postCount = parseInt(navNext.title.split(' ').slice(-1)[0].replace('.', ''));
			} else {
				// Get number of posts countinfg them
				this.postCount = html.querySelectorAll('[id*="postcount"]').length;
			}
		}
	}

	public async update(): Promise<this> {
		if (this.__loading === true || this.exists === false)
			return this;

		this.__loading = true;

		return fetch(`${Urls.thread}${this.id}`)
			.then(Utils.responseToHtml)
			.then(html => {
				this.updateFromHTML(html);

				this.__loading = false;

				return this;
			}).catch(() => {
				this.__loading = false
				return this;
			});
	}

	public async getWhoPosted(): Promise<PostCountByUser> {
		return fetch(`${Urls.whoposted}${this.id}`)
			.then(Utils.responseToHtml)
			.then(html => {
				const postCountByUser: PostCountByUser = new Map();

				const rows = Array.from(html.querySelectorAll('.tborder > tbody > tr')).slice(2, -1);

				rows.forEach(row => {
					const cols = <NodeListOf<HTMLAnchorElement>>row.querySelectorAll('td > a');

					const userId: UserID = parseInt(cols[0].href.split('=')[1]);
					const nickname: Nickname = cols[0].innerText.trim();
					const postsCount: number = parseInt(cols[1].innerText);

					postCountByUser.set(new BasicUser(userId, nickname), postsCount);
				});

				return postCountByUser;
			});
	}

	public async getPost(number: number): Promise<Post> {
		return fetch(`${Urls.thread}${this.id}`)
			.then(Utils.responseToHtml)
			.then(html => {
				const postHTML = <HTMLElement>html.querySelector(`[name="${number}"]`)
					.parentNode.parentNode.parentNode.parentNode;

				return Post.fromHTML(postHTML);
			});
	}

	public async getMultiplePosts(numbers: number[]): Promise<Map<number, Post>> {
		numbers.sort((a, b) => a - b);

		const numbersByPage: Map<number, number[]> = (function() {
			const pages = new Map;
			numbers.forEach(n => {
				const page = Math.ceil(n / Thread.MAX_POSTS_PER_PAGE);

				if (!pages.has(page))
					pages.set(page, []);

				pages.get(page).push(n);
			})

			return pages;
		})();

		const pageNumbers = Array.from(numbersByPage.keys())

		const pagesRequests = Array.from(numbersByPage.keys()).map(pageNumber => {
			console.log('Requesting page', pageNumber);
			return fetch(`${Urls.thread}${this.id}&page=${pageNumber}&pp=${Thread.MAX_POSTS_PER_PAGE}`)
				.then(Utils.responseToHtml);
		});

		const posts = new Map();

		(await Promise.all(pagesRequests)).map((html: HTMLDocument, i) => {
			const numbersInCurrentPage = numbersByPage.get(pageNumbers[i]);

			numbersInCurrentPage.forEach(number => {
				const postHTML = <HTMLElement>html.querySelector(`[name="${number}"]`)
					.parentNode.parentNode.parentNode.parentNode;

				posts.set(number, Post.fromHTML(postHTML));
			})
		});

		return posts;
	}

	public async getPostsInPage(pageNumber: number = 1, postsPerPage: number = Thread.DEFAULT_POSTS_PER_PAGE, update: boolean = true): Promise<Post[]> {

		if (postsPerPage < 0)
			throw 'postsPerPage can not be negative'

		if (postsPerPage > Thread.MAX_POSTS_PER_PAGE)
			postsPerPage = Thread.MAX_POSTS_PER_PAGE;

		return fetch(`${Urls.thread}${this.id}&page=${pageNumber}&pp=${postsPerPage}`)
			.then(Utils.responseToHtml)
			.then(html => {
				if (update === true)
					this.updateFromHTML(html);

				const posts = Array.from(html.querySelectorAll<HTMLElement>('table[id^="post"]'));

				return posts.map((html: HTMLElement) => {
					return Post.fromHTML(html);
				});
			});
	}

	public async getPostInRange(start: number = null, end: number = null, update: boolean = true): Promise<Post[]> {

		if (start === null || end === null)
			throw 'Must introduce start - end range';

		if (start >= end)
			throw 'Start position must be less than end postition';

		const startPage = Math.ceil(start / Thread.MAX_POSTS_PER_PAGE);
		const endPage = Math.ceil(start / Thread.MAX_POSTS_PER_PAGE);

		const range = endPage - startPage;

		const postsInPages = new Array(range).fill(undefined).map(({ }, index) => {
			const pageNumber = index + startPage;
			return this.getPostsInPage(pageNumber, Thread.MAX_POSTS_PER_PAGE, update);
		});

		const posts = (await Promise.all(postsInPages)).flat();

		return posts.slice(0, range);
	}
}
