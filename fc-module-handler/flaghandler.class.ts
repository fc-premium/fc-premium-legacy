/**
 * A class to handle Flags
 * @param flag_arr pre initialitated flags
 */
export class FlagHandler {

	private readonly __flags: Set<string>;

	constructor(flag_arr: Array<string>) {
		this.__flags = new Set(flag_arr);
	}

	isset(...flags: Array<string>): boolean {
		return flags.every(f => this.__flags.has(f));
	}

	unset(...flags: Array<string>): void {
		flags.forEach(f => this.__flags.delete(f));
	}

	set(...flags: Array<string>) {
		flags.forEach(f => this.__flags.add(f))
	}

	flags() {
		return Array.from(this.__flags.keys());
	}

	clear(): void {
		this.__flags.clear();
	}
}
