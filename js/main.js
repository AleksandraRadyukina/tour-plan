const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_novigate_next',
    prevEl: '.slider-button_novigate_prev',
  },
});
