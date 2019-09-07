interface String {
	removeTildes(this: string): string;
}

interface FormData {
	toDataString(this: FormData): string;
}

interface Array<T> {
	binarySearch(value: any, valueGetter?: Function, comp?: Function): number;
}

// $.expr[':'].icontains = function(a, i, m) {
// 	return jQuery(a).text().toUpperCase()
// 		.indexOf(m[3].toUpperCase()) >= 0;
// };
