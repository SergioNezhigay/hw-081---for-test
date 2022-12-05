var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  initialSlide: 2,
  // centeredSlides: true,
  // freeMode: true,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
  },
});
