$(document).ready(function () {
//ANIMATE ELEMENTS WHEN SCROLLED DIFFERENT POSITIONS

    $(document).on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active-link');
        });
        $(this).addClass('active-link');
      
        var target = this.hash, 
        menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-70 //offset from screen top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    
    $('#nav-left li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos+80 && refElement.position().top + refElement.height() > scrollPos-120) {
            $('#nav-left li a').removeClass("active-link");
            currLink.addClass("active-link");
        }
        else{
            currLink.removeClass("active-link");
        }
    });
}

	$(window).scroll(function() {
		$('.slideup-text, .ourvision-text').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		var windowHeight = $(window).height();
			if (imagePos < topOfWindow+windowHeight-30) {
				$(this).addClass("slideUp");
			}
		})
	});