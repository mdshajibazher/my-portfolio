(function ($) {
"use strict"
	// Nivo slider
	$(window).on('load', function() {
	    $('#slider').nivoSlider({
	    	    prevText: "<i class='fa fa-angle-double-left'></i>",
	            nextText: "<i class='fa fa-angle-double-right'></i>",
	            manualAdvance: true,
	    }); 
	}); 
	// Menu
	$(document).ready(function(){
		$('.menu-button').click(function(){
			$(this).next('ul').slideToggle('slow');
			$(this).toggleClass('active');
		});

		$('.main-menu > ul > li.mega').click(function(){
				$('div.mega-menu ul').slideToggle('slow');
		});
	});



    //Sticky Menu
	 $(document).ready(function(){
	    $(".main-menu-area").sticky({topSpacing:0});
	 });
	//Mix it up
	 $(document).ready(function(){
		$('.our-gallery').mixItUp();
	 });

	 // Course Carousel

	 $(document).ready(function(){
	 	$('.course-carousel').owlCarousel({
	 		items: 6,
	 		margin: 5,
	 		autoplay: true,
	 		loop: true,
	 		autoplayTimeout: 1000,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:2,
		        },
		        550:{
		            items:3,
		        },
		        768:{
		            items:4,
		        },
		        1000:{
		            items:6,
		        },
		        

		    }
	 	});
	 })

})(jQuery);