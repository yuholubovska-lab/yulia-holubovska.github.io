// Ініціалізація основної каруселі за ідентифікатором #sw-01

const swiper = new Swiper('#sw-01', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   type: 'bullets',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  breakpoints: {
    // when window width is >= 320px
    600: {
      pagination: false,
      slidesPerView: 2,
      spaceBetween: 65
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 75
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 95
    }
  }
});