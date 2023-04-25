(function ($) {
"use strict"

// owl carousel
$(document).ready(function(){
  $(".product-carousel").owlCarousel({
  		items: 4,
  		margin: 10,
  		stagePadding: 10,
  		nav: true,
  		navText: ["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],
  		autoplay: true,
  		responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },

        500:{
            items:3,
        },
        1000:{
            items:4,
        }
    }

  });
});
// mobile menu
$(document).ready(function(){
	$('.menu-button').click(function(){
		$('.main-menu ul').slideToggle('slow');
		$(this).toggleClass('active');
	})
})
})(jQuery);