/**
 * Describes a class that its properties depends on async functions
 */
export class Dynamic {
	protected __currentPromise: Promise<any> = null;

	private async waitUntilLoadingIsComplete(): Promise<void> {
		return new Promise(resolve => {

			if (this.__currentPromise === null) {
				resolve();
			} else {
				this.__currentPromise
					.then((x: any) => {
						resolve();
						return x;
					})
					.catch((x: any) => {
						resolve();
						return x;
					})
			}
		});
	}

	public async get(): Promise<this> {
		await this.waitUntilLoadingIsComplete();
		return this;
	}

	constructor() { }
}
