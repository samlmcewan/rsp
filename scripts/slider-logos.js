/**
   * Init swiper slider with 3 slides at once in desktop view
   */
 new Swiper('.sliderMemberships', {
    speed: 2000,
    loop: true,
    spaceBetween: 0,
    simulateTouch:false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '#m-prev',
      prevEl: '#m-next',
    },
    breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 40
            },
      
            1200: {
              slidesPerView: 3,
            }
          }
   
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
 new Swiper('.sliderAwards', {
    speed: 2000,
    loop: true,
    spaceBetween: 0,
    simulateTouch:false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '#a-prev',
      prevEl: '#a-next',
    },
    breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 40
            },
      
            1200: {
              slidesPerView: 3,
            }
          }
   
  });
