import { Module } from './module'

interface CSSPair {
	selector: string;
	cssText: Object;
}

export class CSSHandler {

	private readonly moduleHost: Module;
	private readonly styleElement: HTMLStyleElement = null;
	private get styleSheet(): CSSStyleSheet {
		return <CSSStyleSheet>this.styleElement.sheet;
	};
	private todoPool: Array<CSSPair> = [];

	public constructor(moduleName: Module) {

		this.moduleHost = moduleName;

		this.styleElement = document.createElement('style');
		this.styleElement.setAttribute('isVirtual', 'true');
		this.styleElement.setAttribute('moduleHost', this.moduleHost.name);

		if (document.readyState !== 'complete') {
			window.addEventListener('load', () =>
				this.appendStyleElementAndApplyRules()
			);
		} else {
			this.appendStyleElementAndApplyRules();
		}
	}

	private appendStyleElementAndApplyRules(): void {
		document.head.appendChild(this.styleElement);

		this.todoPool.forEach((rule: CSSPair) =>
			this.set(rule.selector, rule.cssText)
		);
	}

	private pretifySelector(selector: string): string {
		const length = this.styleSheet.cssRules.length;

		this.styleSheet.addRule(selector, '');

		selector = (<CSSStyleRule>this.styleSheet.cssRules[length]).selectorText;

		this.styleSheet.removeRule(length)

		return selector;
	}

	private objectToCSS(cssObject: Object): string {
		let css = Object.keys(cssObject)
			.map(key => `${key}: ${cssObject[key]};`).join('');

		return css;
	};

	private CSSToObject(css: string): Object {
		const obj: Object = {};

		css.split('{').slice(-1)[0].split('}')[0]
			.trim().split(';').forEach(rule => {
				let [key, value] = rule.split(':');
				if (key !== undefined && value !== undefined)
					obj[key.trim()] = value.trim();
			});

		return obj;
	}

	public get(selector: string): any {
		if (this.styleSheet !== null) {

			let i = null;

			selector = selector.trim();

			let result: any = Array.from(this.styleSheet.rules)
				.filter((rule, ri) => {
					i = i === null ? ri : i;
					return (<CSSStyleRule>rule).selectorText === selector;
				});

			if (result.length > 0) {
				result = result[0];
				result.index = i;
			} else {
				result = {
					index: -1
				};
			}

			return result;
		}
	}

	public set(selector: string, cssRules: Object | string) {

		if (typeof cssRules === 'string')
			cssRules = this.CSSToObject(cssRules);

		if (this.styleSheet !== null) {

			selector = this.pretifySelector(selector);

			// Replace current style if exists
			const cssRule = this.get(selector);
			let currentCssObj: Object = {};

			if (cssRule.index > -1) {
				currentCssObj = this.CSSToObject(cssRule.cssText);
				this.styleSheet.removeRule(cssRule.index);
			}

			Object.assign(currentCssObj, cssRules);

			this.styleSheet.addRule(selector, this.objectToCSS(currentCssObj));

		} else { // Push to do later
			this.todoPool.push(<CSSPair>{
				selector: selector,
				cssText: cssRules
			});
		}

		return this;
	}

}
