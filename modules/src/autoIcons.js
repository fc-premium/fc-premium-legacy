(function () {
	'use strict';

	const MODULE = new Module({
		moduleName: 'AUTO_ICON',
		title: 'Auto Icon',
		description: 'Autocomplete icons',
		author: 'pytness',
		version: '1.0.1',

		match: [
			'/foro/showthread.php*',
			'/foro/newreply.php*',
			'/foro/newthread.php*',
			'/foro/private.php*'
		],

		runat: 'load'
	});

	const ICONS_JSON_URL = 'https://raw.githubusercontent.com/Pytness/fc-modules/master/modules/resources/icons.json';
	const SMILIES_URL = '//st.forocoches.com/foro/images/smilies/';

	MODULE.config.define('MAX_ROWS', {
		title: 'Max rows',
		defaultValue: 10,
		flags: ['CONFIGURABLE'],

		getter: function () {
			return Config.HTML.INPUT.GETTER(this.value, {
				type: 'number'
			});
		},

		parser: function (el) {
			let lastValue = this.value;
			let currentValue = parseInt(Config.HTML.INPUT.PARSER(el));

			currentValue = isNaN(currentValue) ?
				lastValue : currentValue;


			return currentValue;
		}
	});


	class BackdropHandler {
		constructor(editor = undefined) {
			let self = this;

			this.cursorPosition = 0;
			this.lineCursorPosition = 0;

			this.lineStartIndex = 0;
			this.lineEndIndex = 0;

			this.currentLine = '';

			this.isValidPattern = false;

			this.patternStartIndex = 0;
			this.currentPattern = '';

			/////////////////////////

			this.maxRows = MODULE.config.get('MAX_ROWS');
			this.display = false;

			this.selectedIndex = 0;

			this.icons = [];
			this.filteredIcons = []

			this.editor = null;
			this.mousetrap = null;

			this.backdrop = $('<div class="tm_backdrop" style="display: none">');

			// Update editor value on row click
			this.backdrop.on('click', 'span.row', function () {
				self.display = false;
				self.backdrop.hide();

				let text = self.editor.val();
				let cursor = self.cursorPosition;
				let lastIndex = cursor - self.currentPattern.length;

				let iconText = $(this).text().trim();

				// Add space padding if necessary
				let newText = text.substr(0, lastIndex);
				let padding = text[cursor] !== ' ' ? ' ' : '';

				newText += iconText;
				newText += padding + text.substr(cursor);

				self.editor.val(newText);
				self.editor.focus();

				let newCursor = cursor + (newText.length - text.length) + padding.length;
				self.editor[0].setSelectionRange(newCursor, newCursor);

				self.selectedIndex = 0;
			});

			this.setEditor(editor);
			this.getIcons();
		}

		getComputedValues() {

			if (this.backdrop.length !== 1)
				return;

			this.cursorPosition = this.editor.prop("selectionStart");

			// Exit if user has selected something
			if (this.editor.prop('selectionEnd') !== this.cursorPosition) {
				this.display = this.isValidPattern = false;
				return;
			}

			let text = this.editor.val();

			// Find start of current line
			this.lineStartIndex = text.substr(0, this.cursorPosition)
				.lastIndexOf('\n');
			this.lineStartIndex = this.lineStartIndex === -1 ?
				0 : this.lineStartIndex + 1;

			// Find end of current line
			this.lineEndIndex = text.indexOf('\n', this.cursorPosition);
			this.lineEndIndex = this.lineEndIndex === -1 ?
				text.length : this.lineEndIndex + 1;

			this.lineNumber = text.substr(0, this.lineStartIndex)
				.split('\n').length - 1;

			this.currentLine = text.substr(
				this.lineStartIndex,
				this.lineEndIndex - this.lineStartIndex
			);

			this.lineCursorPosition = this.cursorPosition - this.lineStartIndex;

			this.currentPattern = this.currentLine
				.substr(0, this.lineCursorPosition);

			this.isValidPattern = this.currentPattern.indexOf(':') > -1;

			if (this.isValidPattern) {
				this.patternStartIndex = this.currentPattern.lastIndexOf(':');
				this.currentPattern = this.currentPattern.slice(this.patternStartIndex);
			}

			this.display = this.isValidPattern;
		}

		updateBackdropRows() {

			if (!this.isValidPattern) return;

			let pattern = this.currentPattern;

			let filteredIcons = this.icons.filter(([icon, gif]) =>
				icon.indexOf(pattern) === 0
			).sort().slice(0, this.maxRows);

			this.filteredIcons = filteredIcons;

			let html = '';

			if (filteredIcons.length === 0 || (filteredIcons.length === 1 && filteredIcons[0] === pattern)) {
				this.display = false;
			} else {
				filteredIcons.reverse().forEach((el, i) => {
					html += `<span class="row"><span>${el[0]}</span> <img src="${SMILIES_URL}${el[1]}" class="tm_img"></span>`;
					// append br if is not the last member
					html += i != filteredIcons.length - 1 ? '<br>' : '';
				});
			}

			// Prevent incorrect position by loading the backdrop hidden
			this.backdrop.css('visibility', 'hidden');

			this.backdrop.html(html);

			let self = this;

			this.backdrop.find('img').toArray().forEach(image =>
				image.addEventListener('load', function (e) {
					self.updateBackdropPosition();
				})
			)

			this.handleKeystrokes();

			this.backdrop.show();
		}

		// TODO: improve function

		updateBackdropPosition() {

			if (!this.display) {
				this.backdrop.hide();
				return;
			}

			let editorPosition = this.editor.offset();
			let backdropRect = this.backdrop[0].getBoundingClientRect();

			let leftMargin = editorPosition.left;
			let topMargin = (editorPosition.top) - (backdropRect.height);


			this.backdrop[0].style.left = `${leftMargin}px`;
			this.backdrop[0].style.top = `${topMargin}px`;

			this.selectRow();

			// Let the user view the backdrop
			this.backdrop.css('visibility', 'visible');
		}

		static getTextDimensions(text, font) {
			let canvas = $("<canvas>")[0];

			let context = canvas.getContext("2d");
			context.font = font;

			// place the text somewhere
			context.textAlign = "left";
			context.textBaseline = "top";

			const width = context.measureText(text).width;

			// Get text height

			var span = $('<span>');
			span.text(text);
			span.css({
				fontFamily: font
			});

			var block = $('<div style="display: inline-block; width: 1px; height: 0px;"></div>');

			var div = $('<div></div>');
			div.append(span, block);

			var body = $('body');
			body.append(div);

			let result = {};

			try {
				block.css({
					verticalAlign: 'baseline'
				});
				result.ascent = block.offset().top - span.offset().top;

				block.css({
					verticalAlign: 'bottom'
				});
				result.height = block.offset().top - span.offset().top;

				result.descent = result.height - result.ascent;

				result.width = width;
			} finally {
				div.remove();
			}

			return result;
		}

		setEditor(editor) {

			let self = this;

			if (this.editor !== null && this.editor[0] === editor) {
				return;
			} else if (this.mousetrap !== null) {
				this.mousetrap.reset();
			}

			this.editor = $(editor);

			this.mousetrap = new Mousetrap(editor);
			this.mousetrap.bind(
				['alt+up', 'alt+down', 'alt+enter', 'tab'],
				function (...args) {
					self.handleKeystrokes(...args);
				}
			);

			this.editor.parents('form').submit(() => {
				self.display = false;
				self.backdrop.hide();
			});

			this.backdrop.appendTo(this.editor.parent());
		}

		getIcons() {
			let ajax = new XMLHttpRequest();
			ajax.open('GET', ICONS_JSON_URL, false); // Sync
			ajax.send();

			this.icons = JSON.parse(ajax.responseText).sort();
		}

		selectRow() {
			// Prevent overflow
			if (this.selectedIndex < 0) this.selectedIndex = 0;

			if (this.selectedIndex >= this.filteredIcons.length)
				this.selectedIndex = this.filteredIcons.length - 1;

			let selectedRow = this.backdrop.find('.row')
				.toArray().reverse()[this.selectedIndex];

			$(selectedRow).addClass('selected');
		}

		handleKeystrokes(ev, key) {
			// Only trigger click event if backdrop is visible
			if (['alt+enter', 'tab'].includes(key) && this.display) {
				let rows = this.backdrop.find('.row')
					.toArray().reverse();

				$(rows[this.selectedIndex]).click();
			} else {
				if (key === 'alt+up') {
					this.selectedIndex += 1;
					this.selectedIndex %= this.filteredIcons.length;
				}

				if (key === 'alt+down') {
					this.selectedIndex -= 1;

					if (this.selectedIndex < 0)
						this.selectedIndex = this.filteredIcons.length - 1;
				}

				this.selectRow();
			}
		}
	}


	MODULE.onload = function () {

		$('html > head').append($(`
			<style>
				/*#vB_Editor_QR_textarea, #vB_Editor_001_textarea {
					background-color: transparent;
				}*/
				.tm_backdrop {
					position: absolute;
					background-color: white;
					margin: 0px;
					box-sizing: border-box;
					border: 1px solid gray;
					border-radius: 3px;
					text-align: left;
				}
				.tm_backdrop > span.row:first {
					padding-top: 2px;
				}
				.tm_backdrop > span.row {
					width: 100%;
					display: inline-block;
					padding: 3px 5px;
					box-sizing: border-box;
				}
				.tm_backdrop > span.row:hover {
					color: red;
					background-color: rgba(0, 0, 0, 0.05);
					text-decoration: underline;
					cursor: pointer;
				}
				.tm_backdrop > span.row.selected {
					background-color: #cccccc !important;
				}
				.tm_img {
					/* max-width: 16px;*/
					max-height: 20px;
					display: inline;
					float: right;
				}
			</style>
		`));

		const backdropHandler = new BackdropHandler();

		MODULE.config.getMeta('MAX_ROWS').onSave = function () {
			backdropHandler.maxRows = currentValue;
		}

		function operate(e) {
			backdropHandler.getComputedValues();
			backdropHandler.updateBackdropRows();
			backdropHandler.updateBackdropPosition();
		}

		function setup(e) {
			backdropHandler.setEditor(e.currentTarget);
		}

		$('html').on('mousedown', 'textarea', setup);
		$('html').on('focus', 'textarea', setup);

		$('html').on('submit', 'textarea', () => {
			backdropHandler.display = false;
			backdropHandler.backdrop.hide();
		});

		$('html').on('keydown', 'textarea', operate);
		$('html').on('keyup', 'textarea', operate);
		$('html').on('mousedown', 'textarea', operate);
		$('html').on('mouseup', 'textarea', operate);
		$('html').on('focus', 'textarea', operate);
	};

	return MODULE;
})();


/* Get icons
// check if in cache
let lsItem = localStorage.getItem('tm_icons_json');
let jsonIcons = false;
if(lsItem !== null) {
	let iconsParsed = false;
	try {
		jsonIcons = JSON.parse(lsItem);
	} catch(e) {}
}
if(jsonIcons !== false) {
	return jsonIcons;
}
let ajax = new XMLHttpRequest();
ajax.open('GET', 'https://www.forocoches.com/foro/misc.php?do=getsmilies', false);
ajax.send();
let html = (new DOMParser()).parseFromString(ajax.responseText, "text/html");
let alt1 = html.querySelectorAll('.alt1');
let alt2 = html.querySelectorAll('.alt2');
let iconTable = Array.from(alt1).concat(Array.from(alt2));
let tempIcons = [];
for(let i = 0; i < iconTable.length; i += 2) {
	let text = iconTable[i + 1].innerText.trim();
	let ic = iconTable[i].firstChild.src.split('/').slice(-1)[0];
	if(text[0] == ':')
		tempIcons.push([text, ic]);
}
tempIcons.sort();
copy(JSON.stringify(tempIcons));
*/
