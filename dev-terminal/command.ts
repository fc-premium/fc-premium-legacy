/// <reference path="../types/xterm.d.ts" />

export class Command {

	public readonly binary: string;
	public readonly callback: Function;
	public readonly description: string;

	constructor(binary: string, description: string, callback: Function) {
		this.binary = binary
		this.callback = callback;
		this.description = description
	}
}


export class CommandList {

	private commandList: Map<string, Command> = new Map();

	constructor() { }

	public declare(command: Command): this {
		this.commandList.set(command.binary, command);

		// Allow method chaining
		return this;
	}

	public declareMultiple(commands: Command[]): this {
		commands.forEach(command => this.declare(command));

		// Allow method chaining
		return this;
	}

	public getCommandList(): string[] {
		return Array.from(this.commandList.keys());
	}

	public has(binary: string): boolean {
		return this.commandList.has(binary);
	}

	public get(binary: string): Command {
		return this.commandList.get(binary);
	}
}
