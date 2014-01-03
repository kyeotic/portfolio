define(['jquery', 'knockout', 'projects/index'], function($, ko, parent) {
	return {
		view: ko.computed(function() {
			var route = parent.router.activeInstruction();
			return route ? 'projects/' + route.config.view : null;
		}),
		compositionComplete: function(view) {
			//This is necessary because magnific popup requires these atrributes
			//They are already on the image, and I don't want to double them up in the source, this is easier
			$('.image-link').each(function() {
				$(this).attr('title', this.alt);
				$(this).attr('href', this.src);
			});

			//Start magnific in gallery mode, with all the images on the page
			$('.image-link').magnificPopup({
				type: 'image',
				gallery: { enabled: true }
			});
		}
	};
});