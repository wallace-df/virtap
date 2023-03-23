;(function($) {
    "use strict"; 
    AOS.init({
        duration: 1000,
        offset: 100,
    }); 
  
     
    // story-about-swiper======
    var swiper = new Swiper(".landing-testimonia-swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: false,
        autoplay: false,
        loopFillGroupWithBlank: true,
        speed: 700,
        navigation: {
            nextEl: ".story-ab-btn-next",
            prevEl: ".story-ab-btn-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1, 
              spaceBetween: 10,
            }, 
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            }, 
            992: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
        },
    });

    // assistentes-especialistas-swiper
    var swiper = new Swiper(".assistentes-especialistas-swiper", {
        speed: 700,
        navigation: {
            nextEl: ".story-ab-btn-next",
            prevEl: ".story-ab-btn-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1, 
              spaceBetween: 10,
            }, 
            575: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            }, 
            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
        },
    });

    // Scroll to top
    function scrollToTop() {
      if ($('.footer-button-scrol').length) {  
          $(window).on('scroll', function () {
              if ($(this).scrollTop() > 200) {
                  $('.footer-button-scrol').fadeIn();
              } else {
                  $('.footer-button-scrol').fadeOut();
              }
          }); 
          //Click event to scroll to top
          $('.footer-button-scrol').on('click', function () {
              $('html, body').animate({
                  scrollTop: 0
              }, 200);
              return false;
          });
      }
  }

    
    /*Function Calls*/ 
    scrollToTop();      
    
})(jQuery);