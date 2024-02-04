/*открытия сайдбара */
$(function(){
   $('.history-btn').on('click', function () {
      $('.history').toggleClass('history-active');
    	$("body").toggleClass('no-scroll');
  });   
});

$(function(){
  $('.toggle-btn').on('click', function () {
      $('.nav-logo').toggleClass('nav-logo-img-content');
      $('.sidebar').toggleClass('active');
    	$('.footer').toggleClass('hiddenfooter');
    	$("body").toggleClass('no-scroll');
  });
});

$(function(){
  $('.page-btn').on('click', function () {
      $('.admin-sidebar').toggleClass('active');
      $('.admin-inner-content-wrapper').toggleClass('active');
  });
});


$(function(){
	var all = $('.history-menu li a');
	$('.history-menu li a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});
});


$(function(){
	var all = $('.storypage-menu li a');
	$('.storypage-menu li a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});
});


$(function(){
	var all = $('.list-grid li a');
	$('.list-grid li a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});

});

$(function(){
	var all = $('.footer-info .footer-item-cubic a');
	$('.footer-info .footer-item-cubic a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});
});

$(function(){
	var all = $('.freelance-detail li a');
	$('.freelance-detail li a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});
});

$(function(){
	var all = $('.about-nav li a');
	$('.about-nav li a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});
});


$(function(){
	var all = $('.story-content-menu .nav li a');
	$('.story-content-menu .nav li a').on('click', function(){
		$(all).removeClass('nav-active');
		$(this).toggleClass('nav-active');
	});
});

$(function(){
	var all = $('.admin-tab-menu li a');
	$('.admin-tab-menu li a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});
});

$(function(){
	var all = $('.profile-nav a');
	$('.profile-nav a').on('click', function(){
		$(all).removeClass('link-active');
		$(this).toggleClass('link-active');
	});
});

$(function(){
	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
 });

/*pagination*/
$(function(){
   $('.pagination-right-box').hover(function () {
      $('.pagination-left-box').toggleClass('paginationtransform');
  });
});

$( "html" ).on( "keydown", function( event ) {
	// console.log(event.which);
	if(event.which == 192){
	    event.preventDefault();
   	$('.terminal-content').toggleClass('terminal-content-active');
   	$('.terminal').toggleClass('terminal-active');
   	if($('.terminal-content').hasClass('terminal-content-active')){
   		$('body').addClass('no-scroll');
   		$('.terminal-text').prop('disabled', false);
			$('.terminal-text').focus();
   	}else if(!$('.terminal-content').hasClass('terminal-content-active')){
   		$('.terminal-text').prop('disabled', true);
   		$('body').removeClass('no-scroll');
   	}
	}
});

