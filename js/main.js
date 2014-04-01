$(document).ready(function () {

	// Mobile menu
	$('body').on('click', '#mobile-menu-trigger', function () {
		$('#main-nav').toggleClass('open');
	});

	// Initialize slideshow
	$('.slideshow').cycle().addClass('enabled');

});
