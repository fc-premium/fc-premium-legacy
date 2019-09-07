export class Utils {

	private static _isMobileVersion: boolean = location.host.split('.')[0] === 'm';

	static utf8ToIso(arrayBuffer: ArrayBuffer) {
		let encoder = new TextDecoder("ISO-8859-1");
		arrayBuffer = new Uint8Array(arrayBuffer);

		return encoder.decode(arrayBuffer);
	}

	static parseHTML(text: string): HTMLDocument {
		return (new DOMParser()).parseFromString(text, "text/html");
	}

	static responseToHtml(response: Response) {
		return response.arrayBuffer()
			.then(Utils.utf8ToIso)
			.then(Utils.parseHTML);
	}

	static removeTildesFromString(value: string): string {
		return value.removeTildes();
	}

	static formToDataString(form: FormData): string {
		return form.toDataString();
	}

	static arrayBinarySearch(array: Array<any>, value: any, comp: Function = null, valueGetter: Function = null): number {
		return array.binarySearch(value, comp, valueGetter);
	}

	static jsonSafeParse(json: string): any {
		try {
			return JSON.parse(json);
		} catch (e) {
			return undefined;
		}
	}

	static get isMobileVersion() {
		return this._isMobileVersion;
	}

	static parseFCDate(dateString: string): Date {

		const msInADay = 1000 * 60 * 60 * 24;

		if (typeof dateString !== 'string') {
			let invalid = new Date();
			invalid.setTime(NaN);

			return invalid;
		}

		const dateChunks = dateString.split(',')
			.map(s => s.trim());

		const monthsTranslations: Object = {
			'ene': 'jan',
			'abr': 'apr',
			'ago': 'aug',
			'dic': 'dec'
		};

		const date = new Date();

		if (['Hoy', 'Ayer'].includes(dateChunks[0])) {

			// Pre set to today at 00:00
			date.setTime(
				Math.floor(Date.now() / msInADay) * msInADay +
				(date.getTimezoneOffset() * 1000 * 60)
			);

			if (dateChunks[0] === 'Ayer')
				date.setTime(date.getTime() - msInADay);

		} else { // day-month-year
			let [day, month, year]: string[] = dateChunks[0].split('-');

			if (monthsTranslations.hasOwnProperty(month))
				month = monthsTranslations[month];

			date.setTime(Date.parse(
				[day, month, year].join('-')
			));
		}

		// work with hour, seconds
		if (dateChunks.length > 1) {
			let hour = Date.parse(`1-1-1970 ${dateChunks[1]} GMT`);

			date.setTime(date.getTime() + hour - (new Date().getTimezoneOffset()));
		}

		return date;
	}
}
