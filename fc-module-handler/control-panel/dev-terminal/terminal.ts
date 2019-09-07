import * as AnsiEscapes from 'ansi-escapes'
import { Command, CommandList } from './command'

enum ParseType {
	COMMAND,
	JAVASCRIPT
};

// class Command {}

function charIsPrintable(keycode: number) {
	const valid =
		(keycode > 47 && keycode < 58) || // number keys
		keycode == 32 || keycode == 13 || // spacebar & return key(s)
		(keycode > 64 && keycode < 91) || // letter keys
		(keycode > 95 && keycode < 112) || // numpad keys
		(keycode > 185 && keycode < 193) || // ;=,-./` (in order)
		(keycode > 218 && keycode < 223);   // [\]' (in order)

	return valid;
}

const PROMPT_LENGTH = 2;

const commandList: CommandList = new CommandList();

commandList.declareMultiple([
	new Command('help', 'Shows this help',
		function(...args: string[]) {
			if (args.length === 0) {
				commandList.getCommandList().forEach(binary =>
					this.terminal.writeln(`${binary}: ${commandList.get(binary).description}`)
				);
			} else {
				if (commandList.has(args[0])) {
					this.terminal.writeln(`${args[0]} ${commandList.get(args[0]).description}`);
				} else {
					this.terminal.writeln(`${args[0]} not found`);
				}
			}
		}
	),

	new Command('clear', 'Clears screen',
		function() {
			this.terminal.write(AnsiEscapes.clearScreen);
		}
	),

	new Command('echo', 'Writes its arguments to screen',
		function(...args: string[]) {
			this.terminal.writeln(args.join(' '));
		}
	)
]);

export class DevTerminal {
	private readonly terminal: Terminal;
	private readonly selector: string | HTMLElement;
	private parseType: ParseType = ParseType.COMMAND;

	private commandHistory: string[] = [];
	private historyIndex: number = 0;

	constructor(selector: string | HTMLElement) {
		this.selector = selector;
		this.terminal = new Terminal({
			cursorBlink: true,
			cursorStyle: 'bar',
			convertEol: true
		});
	}

	init(autofocus: boolean = true) {
		if (typeof this.selector === 'string')
			this.terminal.open(document.querySelector(this.selector));
		else
			this.terminal.open(this.selector);

		this.terminal.writeln('Not implemented yet');

		this.terminal.on('key', (key, ev) =>
			this.pressedKeysHandler(key, ev)
		);

		this.terminal.on('paste', function(data) {
			this.terminal.write(data);
		});

		this.prompt();

		if (autofocus)
			this.terminal.focus();
	}

	prompt() {
		if (this.parseType === ParseType.COMMAND)
			this.terminal.write('# ');
		else if (this.parseType === ParseType.JAVASCRIPT)
			this.terminal.write('> ');

	}

	pressedKeysHandler(key: string, ev: KeyboardEvent) {
		const printable = charIsPrintable(ev.keyCode);

		if (ev.keyCode === 13) {

			this.terminal.writeln('');

			const line = this.terminal.buffer
				.getLine(this.terminal.buffer.cursorY)
				.translateToString()
				.slice(PROMPT_LENGTH).trim();

			this.historyIndex = 0;
			this.commandHistory.push(line);

			this.parseCommand(line);
			this.prompt();

		} else if (ev.keyCode === 8) {
			// Do not delete the prompt
			if (this.terminal.buffer.cursorX > PROMPT_LENGTH)
				this.terminal.write('\b \b');

		} else if (printable) {
			this.terminal.write(key);
		} else {
			switch (ev.code) {
				case 'Escape': {
					this.terminal.blur();
					break;
				}
				case 'Home': {
					this.terminal.write(AnsiEscapes.cursorTo(2));
					break;
				}
				case 'End': {
					let lineLength = this.terminal.buffer
						.getLine(this.terminal.buffer.cursorY)
						.translateToString().trim().length;

					if (lineLength < PROMPT_LENGTH)
						lineLength = PROMPT_LENGTH;

					this.terminal.write(AnsiEscapes.cursorTo(lineLength));
					break;
				}
				case 'ArrowLeft': {
					if (this.terminal.buffer.cursorX > PROMPT_LENGTH)
						this.terminal.write(AnsiEscapes.cursorBackward());
					break;
				}
				case 'ArrowRight': {
					const lineLength = this.terminal.buffer
						.getLine(this.terminal.buffer.cursorY)
						.translateToString().trim().length;

					if (this.terminal.buffer.cursorX < lineLength)
						this.terminal.write(AnsiEscapes.cursorForward());
					break;
				}
			}
		}
	}

	parseCommand(fullCommand: string) {
		const commandParts = fullCommand.trim()
			.split(' ').filter(c => c.length);;

		if (commandParts.length === 0)
			return;

		const binary = commandParts[0].toLowerCase();

		if (commandList.has(binary)) {
			commandList.get(binary).callback.bind(this)(...commandParts.slice(1));
		} else {
			this.terminal.writeln(`Command "${fullCommand}" not found`);
		}
	}
}
