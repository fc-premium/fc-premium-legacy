/**
 * Describes a class that its properties depends on async functions
 */

export class Dynamic {
	protected __loading: boolean = false;

	protected waitUntilLoadingIsComplete(): Promise<void> {
		return new Promise(resolve =>
			setInterval(() => {
				if (this.__loading === false) resolve();
			})
		);
	}

	public async get(): Promise<this> {
		await this.waitUntilLoadingIsComplete();
		return this;
	}

	constructor() { }
}
