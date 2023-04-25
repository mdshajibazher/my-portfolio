(function ($) {
"use strict";
	
	$(document).ready(function(){
		$('.pricing-button > ul.dropdown-menu > li').click(function(){
			$(".price-btn").text($(this).text());
			$(".price-btn").val($(this).text());
		});
	});
	// Active brand carousel

	$(document).ready(function(){
		$('.our-brands').owlCarousel();
	});

	
})(jQuery);	

