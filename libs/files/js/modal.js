$(function(){

	$( "html" ).on( "keydown", function( event ) {
		if(event.which == 110){
		    event.preventDefault();
		    $('#loginmodal').addClass('show');
		    $("body").addClass('no-scroll');
		}
	    setTimeout(function(){
	      $('#loginmodal').find('.modall__dialog').addClass('rotateModalcans');
	    }, 200);
	});

  $('.modal__close').on('click', function(event){
    $("body").removeClass('no-scroll');
    $(".modall__dialog").removeClass('rotateModalcans');
    setTimeout(function(){
     $('.modall').removeClass('show');
    }, 400);
  });

  $('.modall').on('click', function(event){
    $("body").removeClass('no-scroll');
    $(".modall__dialog").removeClass('rotateModalcans');
    setTimeout(function(){
     $('.modall').removeClass('show');
    }, 400);
  });

  $('.modall__dialog').on('click', function(event){
    event.stopPropagation();
  });
});
