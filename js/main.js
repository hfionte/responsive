$(document).ready(function () {

	// Mobile menu
	$('body').on('click', '#mobile-menu-trigger', function () {
		$('#main-nav').toggleClass('open');
	});

	// Initialize slideshow
	$('.slideshow').cycle().addClass('enabled');

	// Functionality for destroying and enabling slideshow based on browser width.
	// Comment out slideshow initalization above before enabling this example.
	/*

	// Initialize slideshow, but not for mobile.
	if ($(window).width() >= 570) {
		$('.slideshow').cycle().addClass('enabled');
	}
	
	// Display slideshow as individual images on mobile.
	$(window).resize(function () {
		var siteWidth = $(window).width();
		if (siteWidth < 570 && $('.slideshow').hasClass('enabled')) {
			$('.slideshow').cycle('destroy')
				.removeAttr('style')
				.removeClass('enabled')
				.find('img').removeAttr('style');
		} else if (siteWidth >= 570 && ! $('.slideshow').hasClass('enabled')) {
			$('.slideshow').cycle().addClass('enabled');
		}
	});
	
	*/

});
