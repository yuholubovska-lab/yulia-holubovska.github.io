// Ініціалізація основної каруселі за ідентифікатором #sw-01

const swiper = new Swiper('#sw-01', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
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
});