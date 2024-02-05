(function ($) {
    "use strict";

    $(document).ready(function () {


        

        // ------------ sticky header ----------------

        function sticky_header(){
            var wind = $(window);
            var sticky = $('.site_header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 10) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();


        // ------------ back to top ----------------

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });
        
        $('#back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });





        // ------------ excelente slider ----------------

        $(function(){
            $('.excelente-slider-nav').slick({
                infinite: false,
                vertical: true,
                verticalSwiping: true,
                slidesPerRow: 3,
                slidesToShow: 3,
                asNavFor: '.excelente-slider',
                focusOnSelect: true,
                arrows: false,
                draggable: false,
                swipeToSlide: false,
                touchMove: false,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            vertical: false,
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            verticalSwiping: false,
                            draggable: false,
                            swipeToSlide: false,
                            touchMove: false,
                            focusOnSelect: false,
                            swipe: false
                        }
                        
                    },
                ]
            });
            $('.excelente-slider').slick({
                infinite: false,
                vertical: true,
                verticalSwiping: true,
                slidesPerRow: 1,
                slidesToShow: 1,
                asNavFor: '.excelente-slider-nav',
                arrows: true,
                prevArrow: $('.excelente-slider-prev'),
                nextArrow: $('.excelente-slider-next'),
                draggable: false,
                swipeToSlide: false,
                touchMove: false,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            vertical: false,
                            verticalSwiping: false,
                            draggable: false,
                            swipeToSlide: false,
                            touchMove: false,
                            swipe: false
                        }
                    },
                ]
            });
        });




        // ------------ testimonial slider ----------------

        $('.testimonial_slider').slick({
            infinite: false,
            slidesPerRow: 1,
            slidesToShow: 1,
            arrows: true,
            prevArrow: $('.testimonial_slider_prev'),
            nextArrow: $('.testimonial_slider_next'),
        });



        // ------------ youtube slider ----------------

        $('.youtube_slider').slick({
            infinite: false,
            slidesPerRow: 1,
            slidesToShow: 1,
            arrows: true,
            prevArrow: $('.youtube_slider_prev'),
            nextArrow: $('.youtube_slider_next'),
        });


        


        
        
    });

})(jQuery);



    // ------------ login dropdwon toggle ----------------

    document.querySelector('.login_dropdwon_toggle').addEventListener('click', function(){
        document.querySelector('.login_dropdwon').classList.toggle('d-block');
    });

    window.addEventListener('mouseup',function(event){
        var pol = document.getElementById('login_dropdwon');
        if(event.target != pol && event.target.parentNode != pol){
            pol.classList.remove('d-block');
        }
    });
