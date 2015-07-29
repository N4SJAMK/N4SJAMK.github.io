   $(document).ready(function () {
       
     // CF VIDEO PLAYER
     var videoarea = $(".cfvideo");
     var video = document.getElementById("thevideo");
     var width = $(window).width();
     video.pause();
     newWidth(width);
     
	 //check orientation
     $(window).on("orientationchange",function(){
     videoarea.unbind('mouseenter mouseleave');
     });
      $( window ).resize(function() {
       
       clearTimeout(this.id);
     this.id = setTimeout(newWidth, 100);
    });
    
     videoarea.click(function (event) {
     event.stopPropagation();
     if (video.paused === true){
      $('.videoSlate').css({ 'opacity': 1 });
      $('.fa-play').css({ 'opacity': 0 });
      $('.video-title').css({ 'opacity': 0 });
      video.play();
          } else if (video.paused === false){
      $('.videoSlate').css({ 'opacity': 0.6 });
      $('.fa-play').css({ 'opacity': 1 });
      $('.video-title').css({ 'opacity': 1 });
      video.pause();
          }
     });
		//pause video if click outside video
      $('html').click(function() {
      $('.videoSlate').css({ 'opacity': 0.6 });
      $('.fa-play').css({ 'opacity': 1, 'color':'#F75423' });
      $('.video-title').css({ 'opacity': 1 });
      video.pause();
      });
      
	  //enable hover on big displays
     function newWidth(width){ 
      width = $(window).width();
     if (width > 992){
        videoarea.hover(videoOnHover, videoOutHover);
       } else videoarea.unbind('mouseenter mouseleave');
   
      function videoOnHover(){ 
      $('.videoSlate').css({ 'opacity': 1 });
      $('.fa-play').css({ 'opacity': 0 });
      $('.video-title').css({ 'opacity': 0 });
      video.play();
     }
     function videoOutHover(){
      $('.videoSlate').css({ 'opacity': 0.6 });
      $('.fa-play').css({ 'opacity': 1 });
      $('.video-title').css({ 'opacity': 1 });
      video.pause();
     }
     }
});