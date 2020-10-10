
$(document).ready(function(){

    //ANIMATION
    function animation(){
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function(){
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            
            if(position < windowHeight + scroll){
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay)
            }
        });
    };

    $(window).scroll(function(){
        animation();
    });
    animation();

    // OWL CAROUSEL
    if($('.team-members-slider').length > 0) {
        $('.owl-carousel').owlCarousel({

            loop: true,
            autoplay: true,
            responsive: {
                0:{
                    items: 1,
                    margin: 0
                },
                992:{
                    items: 2,
                    margin: 30

                }
            },

        });
    }
    

})