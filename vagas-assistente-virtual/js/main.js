(function ($) {
    "use strict";

    $(document).ready(function () {




        // ------------ sticky header ----------------

        function sticky_header() {
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


        if ($.fn.slick) {

            $(function () {
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





        }



    });

})(jQuery);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

const currentParams = new URLSearchParams(window.location.search);
const elements = document.querySelectorAll("[data-link]");

if (currentParams.toString()) {
    elements.forEach(element => {
        // Pega o href existente do elemento
        const existingHref = element.href;

        if (existingHref) {
            // Cria um novo objeto URL com base no href existente
            const url = new URL(existingHref, window.location.origin);

            // Anexa os parâmetros da URL atual no href
            currentParams.forEach((value, key) => {
                url.searchParams.set(key, value);
            });

            // Atualiza o href do elemento com a nova URL completa
            element.href = url.toString();
        }
    });
}

function getNullableValue(val) {
    if (val) {
        val = val.trim();
        if (val.length === 0) val = null;
    }
    return val;
}

function getUTMParams() {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const rawReferrer = getNullableValue(document.referrer);
    const hasUTM = getNullableValue(params.get('utm_source')) && getNullableValue(params.get('utm_medium'));

    let utmParams = {};
    if (hasUTM) {
        utmKeys.forEach(key => { utmParams[key] = getNullableValue(params.get(key)); });
    }
    utmParams.timestamp = Date.now();
    utmParams.referral_url = rawReferrer;

    let firstUtmParams = localStorage.getItem('first_visit_utm');
    if (!firstUtmParams) {
        firstUtmParams = utmParams;
        try { localStorage.setItem('first_visit_utm', JSON.stringify(utmParams)); } catch { }
    } else {
        try { firstUtmParams = JSON.parse(firstUtmParams); } catch { firstUtmParams = utmParams; }
    }

    return { utm_first: firstUtmParams, utm_last: utmParams, has_utm: !!hasUTM };
}

try { console.log(getUTMParams()); } catch { }