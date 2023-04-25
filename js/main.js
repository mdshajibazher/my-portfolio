(function ($) {
"use strict";
	
	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    $('.scroll').fadeIn();
  } else{
    $('.scroll').fadeOut();
  }
});

$(document).ready(function(){
  $('.scroll').click(function(){
    $('*').animate({'scrollTop':'0'},2000);
    return false;
  });

 $('#one .close a.cross').click(function(){
    $('#one').slideUp();
  });
  $('#two .close a.cross2').click(function(){
    $('#two').slideUp();
  });
});


jQuery(document).ready(function(){
  jQuery('input[name="contact-submit"]').on('click', function(){
    
    var contactname = jQuery('input[name="contact-name"]').val();
    var contactemail = jQuery('input[name="contact-email"]').val();
    var contactsub = jQuery('input[name="contact-sub"]').val();
    var contactmsg = jQuery('textarea[name="contact-msg"]').val();
    
    $.ajax({
      'url'     : 'process.php',
      'type'    :  'POST',
      'data'    :  {
        'contact_name' : contactname,
        'contact_email' : contactemail,
        'contact_sub' : contactsub,
        'contact_msg' : contactmsg,
      },
      'success' :  function(arg){
        jQuery('#para').html(arg);

        jQuery('input[name="contact-name"]').val('');
        var contactemail = jQuery('input[name="contact-email"]').val('');
        var contactsub = jQuery('input[name="contact-sub"]').val('');
        var contactmsg = jQuery('textarea[name="contact-msg"]').val('');

      }
    });

    jQuery('.form-heading').hide();
    jQuery('#para').show();
    return false;
  })
});


jQuery('.close-float').on('click', function(){
  jQuery('.float-inf').hide();
  jQuery('.open-float').show();
});

jQuery('.open-float').on('click', function(){
  jQuery('.float-inf').show();
  jQuery(this).hide();
});
	
})(jQuery);	

