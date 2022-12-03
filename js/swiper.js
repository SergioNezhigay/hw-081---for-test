var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  initialSlide: 4,
  spaceBetween: 16,
  centeredSlides: true,
  freeMode: true,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
