import { NO_CACHE_HEADERS } from '../definitions'

export class ResourceHandler {
	static parseUrl(link: string) {

		// TODO: Change this
		if (link[0] === '#')
			return null;

		try {
			const priorizate = link[0] === '!';

			if (priorizate)
				link = link.slice(1);

			const url = new URL(link);

			const protocol = url.protocol;
			const pathname = url.pathname.replace('//', '/');

			url.protocol = 'https:'
			url.pathname = pathname;

			switch (protocol) {
				case 'rgh:':
					url.hostname = 'raw.githubusercontent.com';
					break;
			}

			// TODO: Allow priorization
			// url.priorizate = priorizate;

			return url;

		} catch (err) {
			return null;
		}
	}

	static async unpackJSONlinks(resources: Array<string>): Promise<Array<[string | string[], number]>> { // Unpack json links
		// static async unpackJSONlinks(link: string, index: number) { // Unpack json links
		return Promise.all(resources.map((link: string, index: number) =>
			new Promise(function(resolve) {

				let url: URL = ResourceHandler.parseUrl(link);

				if (url === null)
					return resolve(null);

				if (!url.pathname.endsWith('.json'))
					return resolve([url.href, index]);

				fetch(url.toString(), <RequestInit>NO_CACHE_HEADERS).then((response: Response) =>
					response.json()
				).then((parsed: Object) =>
					resolve([<string[]>parsed, index])
				).catch(() =>
					resolve(null)
				);
			})
		));
	}

	static async sortResources(resources: Array<[string | string[], number]>): Promise<Array<[string, number]>> {

		// Remove invalid urls
		resources = resources.filter(r => r !== null);

		// Sort by index
		const resourcesWithoutIndex = resources.sort(([{ }, url_a_index], [{ }, url_b_index]) =>
			url_a_index - url_b_index
		).map(r => r[0]).flat();

		// remove duplicated urls
		return Array.from(new Set(resourcesWithoutIndex)).map((res: string, i: number) => {
			return [res, i];
		});
	}

	static async getSourceCode(resources: Array<[string, number]>) {
		// Download scripts in parallel
		return Promise.all(resources.map(([link, resourceIndex]: [string, number]) => {
			return new Promise(function(resolve) {

				let url: URL = ResourceHandler.parseUrl(link);

				if (url === null)
					return resolve(false);

				if (!url.pathname.endsWith('.js'))
					return resolve(false);

				return fetch(url.toString(), <RequestInit>NO_CACHE_HEADERS).then(response =>
					response.text()
				).then(scriptSource =>
					resolve([scriptSource, resourceIndex])
				).catch((err) => {
					this.MODULE.debug.error(url.href, err);
					resolve(false)
				});
			})
		}))
	}
}
