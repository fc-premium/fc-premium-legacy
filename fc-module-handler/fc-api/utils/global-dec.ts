String.prototype.removeTildes = function(this: string): string {
	return this.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, "");
};

FormData.prototype.toDataString = function(this: FormData): string {
	return Array.from(<ArrayLike<any>><unknown>this).reduce((a, b) =>
		(typeof a == 'string' ? `${a}&` : `${a[0]}=${escape(a[1])}&`) +
		`${b[0]}=${escape(b[1])}`
	);
};

Array.prototype.binarySearch = function(this: any[], value: any, valueGetter: Function = null, comp: Function = null): number {
	let lastPos = 0;
	let pos = Math.round(this.length / 2);
	let foundAt = -1;

	valueGetter = typeof valueGetter !== 'function' ?
		(v: any) => v : valueGetter;

	comp = typeof comp !== 'function' ?
		(a: any, b: any) => a - b : comp;

	while (foundAt == -1 && pos < this.length) {
		let v = valueGetter(this[pos]);

		let r = comp(v, value);

		if (r < 0) {
			pos += Math.round((lastPos + pos) / 2);
		} else if (r > 0) {
			pos -= Math.round((lastPos + pos) / 2);
		} else {
			foundAt = pos;
		}

		lastPos = pos;
	}

	return foundAt;
};


// JSON.safeParse = function(json: string): any {
// 	try {
// 		return JSON.parse(json);
// 	} catch (e) {
// 		return undefined;
// 	}
// }
