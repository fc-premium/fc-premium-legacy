(function ($, window) {
	'use strict';

	const MODULE = new Module({
		moduleName: 'THUMBNAIL_PREVIEW',
		title: 'Thumbnail preview',
		description: 'Allows you to preview attached thumbnails in a pop up',
		author: 'nurbian',
		version: '1.0',

		match: ['/foro/showthread.php*'],

		runat: 'load',
	});

	MODULE.onload = function () {

		// Create styles

		MODULE.styles.set('#next-arrow, #prev-arrow', {
				'cursor': 'pointer',
				'padding': '0px 20px 0px 20px'
			})
			.set('.swal2-content *::selection', {
				'background-color': 'inherit',
				'color': 'inherit'

			})
			.set('.swal2-image', {
				'max-height': '100%',
				'animation-name': 'transition',
				'animation-duration': '0.3s'
			});

		let images = [];
		let imageIndex = 0;
		let src = '';

		const updateImageIndex = () => {
			$('#modal-thumb').attr('src', src);
			$('#modal-thumb').parent().attr('href', src);
			$('#img-index').text(imageIndex + 1);
		};

		const next = () => {
			imageIndex = ++imageIndex % images.length;
			src = images[imageIndex].attributes.href.value;
			updateImageIndex();
		};

		const prev = () => {
			imageIndex = (imageIndex + images.length - 1) % images.length;
			src = images[imageIndex].attributes.href.value;
			updateImageIndex();
		};

		$('img.thumbnail').click(function (event) {
			event.preventDefault();
			event.stopPropagation();

			let self = $(this);

			//stores all the images
			images = self.closest('div')
				.children().toArray();

			imageIndex = self.parent().index();
			src = images[imageIndex].attributes
				.href.value;

			// Exit if swal is already open
			if (Swal.isVisible()) return;

			Swal.fire({
				title: 'Archivos adjuntos',
				html: `<a href="${src}" target="_blank">` +
					`<img id="modal-thumb" class="swal2-image" src="${src}"></a>` +
					'<div id="modal-opt"><strong id="prev-arrow"><</strong>' +
					'<span id="img-index">0</span>' +
					'<strong id="next-arrow">></strong></div>',

				onOpen: (modal) => {

					if (images.length == 1) {
						$('#modal-opt').css({
							display: 'none'
						});
					} else {
						updateImageIndex();

						$('#next-arrow').click(next);
						$('#prev-arrow').click(prev);

						const me = new Mousetrap(modal);

						me.bind(['left', 'right'], (ev, key) => {
							(key == "left" ? next : prev)();
						});
					}
				},
			});
		});
	};

	return MODULE;
})(jQuery, unsafeWindow);
