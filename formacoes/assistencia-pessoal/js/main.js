(function ($) {
    "use strict";

    $(window).on('load', function(){
        // Prealoder
        $("#preloader").fadeOut();
    });

    $(document).ready(function () {
        $('.toggle_btn').on('click', function(){
            $(this).parent().toggleClass('active');
        });

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        //Slider Initialize
        $('.owl-carousel.slider1').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            smartSpeed: 500,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 20,
                    margin: 10,
                },
                576:{
                    items: 1,
                    stagePadding: 70,
                },
                768: {
                    items: 1,
                    stagePadding: 90,
                },
                992: {
                    items: 3,
                    stagePadding: 15,
                }
            }
        });

        //Slider Initialize
        $('.owl-carousel.benefit_carousel').owlCarousel({
            loop: true,
            margin: 25,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 30,
                    margin: 10,
                },
                576:{
                    items: 1,
                    stagePadding: 70,
                },
                768: {
                    items: 1,
                    stagePadding: 90,
                },
                992: {
                    items: 3
                }
            }
        });
    });

})(jQuery);