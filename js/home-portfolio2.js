
    //WNAV BAR BLACK SCROLL
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('nav').addClass('black');
        }
        else {
            $('nav').removeClass('black');
        }
    });

    //SMOOTH SCROLL
    $(document).ready(function(){

        var scrollLink = $('.scroll');
        
        scrollLink.click(function(event){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            },1000);
        });

        //active switching
        $(window).scroll(function(){
        var scrollBarLocation = $(this).scrollTop();

        scrollLink.each(function(){

        var sectionOffSet = $(this.hash).offset().top

        if (sectionOffSet <= scrollBarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
        });
    });

});

    //LINK NAVBAR SELECTED/ACTIVATED
    $(document).on('click','ul li', function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
    //navigation-mobile-menu
    $('#nav-menu-button').click(function(){
        $('#navigation-menu-mobile').slideToggle();
    });
    $('#navigation-menu-mobile').mouseleave(function(){
        $('#navigation-menu-mobile').slideUp();
    });