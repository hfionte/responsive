$(document).ready(function () {

	// Mobile menu
	$('body').on('click', '#mobile-menu-trigger', function () {
		$('#main-nav').toggleClass('open');
	});

	$('.slideshow').cycle().addClass('enabled');

	// Functionality for destroying and enabling functionality based on browser width.
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
			console.log("destroy slideshow");
		} else if (siteWidth >= 570 && ! $('.slideshow').hasClass('enabled')) {
			$('.slideshow').cycle().addClass('enabled');
			console.log("build slideshow");
		}
	});
	
	*/

});
