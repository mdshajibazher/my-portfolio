(function ($) {
"use strict";

	$(document).ready(function(){
		$('.load').click(function(){
			$('.hot-last-column').slideDown(1500);
		});

		$('.new-load').click(function(){
			$('.new-last-column').slideDown(1500);
		});


		$('.best-load').click(function(){
			$('.best-last-column').slideDown(1500);
		});


		$('.spd-load').click(function(){
			$('.last-col').slideDown(1500);
		});
	})
	
})(jQuery);	