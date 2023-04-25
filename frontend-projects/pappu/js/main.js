(function ($) {
"use strict";

	//active slider carouseol 

	$(document).ready(function(){
		$('.p-carousel').owlCarousel({
			singleItem: true,
			navigation: true,
			navigationText : ["<i class='fa fa-angle-double-left'></i>","<i class='fa fa-angle-double-right'></i>"],
			autoPlay: true,
			autoplayTimeout:1000,
		});
		$('.client-carousel').owlCarousel({
			items: 6,
			pagination: false,
			navigation: true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			itemsMobile : [479,2],
			itemsTablet: [768,4],
			itemsDesktopSmall : [980,4],
			autoPlay: true,

		});
	});


	// Active Mix it Up
	$(document).ready(function(){
		$('#portfolio-1-col').mixItUp();
		$('.portfolio-2-col').mixItUp();
	});
	
})(jQuery);	

