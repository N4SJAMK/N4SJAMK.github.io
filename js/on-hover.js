 $(document).ready(function () {
  var facecard = $(".face-card");
  var width = $(window).width();
  newWidth(width);
    
    // PULSE HOVER
     $('.company-logos, .button').hover(
    /* hover */
    function(){$(this).addClass("pulse")},
    /* not hovering */
    function(){$(this).removeClass("pulse")}
    );
    
    $( window ).resize(function() {
      clearTimeout(this.id);
     this.id = setTimeout(newWidth, 100);
     width = $(window).width();
     newWidth(width);
    });
    
	//FACECARDS HOVER
   facecard.hover(onHover, outHover);
  
   function newWidth(width){ 
    width = $(window).width();
    
       if (width > 992){
        $('.face-details').removeClass('face-hover');
       }
     //open dropdown list in navbar on hover or on click  
     var navright = $('.nav-right'); 
     if (width > 992){
      navright.hover(navOnHover, navOutHover);
     } else navright.unbind('mouseenter mouseleave');
     
      navright.click(function (event) {
       if (width > 992){
        $(this).find('li ul').addClass('nav-hover');
       } else $(this).find('li ul').removeClass('nav-hover');
      });
    }

    function navOnHover(){ $(this).find('li ul').addClass('nav-hover') }
    function navOutHover(){ $(this).find('li ul').removeClass('nav-hover') }
    function onHover(){ $(this).find('.face-details').addClass('face-hover') }
    function outHover(){ $(this).find('.face-details').removeClass('face-hover') }
    
    //Posters' grow effect on challenge factory 2014 page
     var poster = $('.poster'); 
      poster.click(function (event) {
       
       if ($(this).hasClass('grow')) {
         $(this).removeClass('grow');
       } else {
        poster.removeClass('grow');
        $(this).addClass('grow');
       }
  
      });
    
});