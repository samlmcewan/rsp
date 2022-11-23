/**
   * Init swiper slider with 3 slides at once in desktop view
   */
 new Swiper('.sliderGallery', {
    allowTouchMove: false,
    speed: 1500,
    loop: true,
    spaceBetween: 0,
   
    // slidesPerGroup: 0,
    touchStartForcePreventDefault: true,
    // simulateTouch: true,
    shortSwipes: false,
    // preventClicksPropagation: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    
    // slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: false
    },
    navigation: {
      nextEl: '#g-prev',
      prevEl: '#g-next',
    },
    breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 40
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0
              },
      
            1200: {
              slidesPerView: 3,
            }
          }
   
  });