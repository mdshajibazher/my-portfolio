(function ($) {
"use strict";
	
	
	$(document).ready(function(){
		        $('.main-menu > li > a').on('click', function(){
            $(".menu-button").removeClass('active');
        });
		$('.menu-button').click(function(){
			$(this).next('ul').slideToggle();
			$(this).toggleClass('active');
		})
	})
	
})(jQuery);	

