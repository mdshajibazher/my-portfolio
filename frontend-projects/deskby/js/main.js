(function ($) {
"use strict"
	$(document).ready(function(){




				$(".i1").owlCarousel({
                items: 1,
                margin: 10,
                nav   : true,
                navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass:false,
                autoplay: true,
                loop: true

              });

		$("#top-listing").owlCarousel({
                items: 4,
                margin: 10,
                nav   : true,
                navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2,
                        nav:false
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:4,
                        nav:true,
                        loop:false
                    }
                }

              });

            $("#clients").owlCarousel({
                items: 6,
                 margin: 30,
                 autoplay: true,
                 nav:false,
                 responsiveClass:true,
                responsive:{
                    0:{
                        items:3,
                        nav:false
                    },
                    600:{
                        items:4,
                        nav:false
                    },
                    1000:{
                        items:6,
                        nav:false,
                        loop:false
                    }
                }

              });





         
            $('.menu-button').click(function(){
                $('.main-menu').toggleClass('show');
                $(this).toggleClass('active');
            })

            $('.mobile-search a').click(function(){
               $(".serach-body").show();
            });
            $('.serach-body a').click(function(){
               $('.serach-body').hide();
            });

            $("a.map").click(function(){
                $('.g-map').show();
            });
            $(".map-cross a").click(function(){
                $('.g-map').hide();
            });
            $("a.m-filter").click(function(){
                $('.mobile-filter').slideDown('slow');
            });
            $("a.filter-cross").click(function(){
                $('.mobile-filter').hide();
            });


    


            $(".mapstck").sticky({topSpacing:65});
            $(".search-page-area").sticky({topSpacing:0});




        
            




  	});


})(jQuery);