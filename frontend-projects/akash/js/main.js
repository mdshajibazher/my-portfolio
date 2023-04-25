(function ($) {
    "use strict";
    
    $(document).ready(function($){
		
		    /*---------------------
			 TOP Menu Stick
			--------------------- */
				var s = $("#sticker");
				var pos = s.position();					   
				$(window).scroll(function() {
					var windowpos = $(window).scrollTop();
					if (windowpos > pos.top) {
					s.addClass("stick");
					} else {
						s.removeClass("stick");	
					}
				});	

		//singlePageNav
		 $('.menu-area').singlePageNav();
		
		//scrollUp
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
		
		//Owl carousel JS active 
		$('.our-clients-active').owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,
				animateOut: 'slideOutDown',
				animateIn: 'flipInX',
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:1,
					},
					1000:{
						items:1,
					}
				}
			});
			
		//Single Project JS active 
		$('.active-single-project').owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,
				animateOut: 'slideOutRight',
				animateIn: 'flipInX',
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:1,
					},
					1000:{
						items:1,
					}
				}
			});
		

	 
		$('.kp-project li').click(function(){
			$('.kp-project .active').removeClass('active');
			$(this).addClass('active');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		});
		
		
	});



    jQuery(window).load(function(){
        
     

        
        /****************************************/
        /*counter*/
        /****************************************/
        if ($(".info-counter").length > 0)
        {
            $('.info-counter').appear();
            $('.info-counter').on('appear', loadSkills);
        }
        var coun = true;
        function loadSkills()
        {
            $(".info-counter").each(function () {
                var datacount = $(this).attr("data-limit");
                if (coun)
                {
                    $(this).find('h4.counter').each(function () {
                        var $this = $(this);
                        $({Counter: 0}).animate({Counter: datacount}, {
                            duration: 8800,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter) + '');
                            }
                        });
                    });

                }
            });
            coun = false;
        }
        
    });

})(jQuery);