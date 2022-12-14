
  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  //  new Swiper('.sliderCarousel', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   }
  // });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  // new Swiper('.sliderCarousel', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 40
  //     },

  //     1200: {
  //       slidesPerView: 3,
  //     }
  //   }
  // });
              
              
              
/**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.sliderCarousel', {
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    simulateTouch:false,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 0
      }
    }
  });      

/**
   * Init swiper slider with 1 slide at once in desktop view
   */

  // Make loop true if there are more than one slides added to testimonial slider 

  const testimonialS = document.querySelector('#testimonials-carousel');
  const tSlides = testimonialS.querySelectorAll('.swiper-slide');
  let toLoop = false;

if(tSlides.length > 1) {
  toLoop = true;
}

console.log(toLoop);




   new Swiper('.sliderTestimonials', {
    speed: 2000,
    loop: false,
    spaceBetween: 0,
    simulateTouch:false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '#t-next',
      prevEl: '#t-prev',
    }

    
   
  });

  
