 new Swiper('.hotel-lead__container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_navigate_next',
    prevEl: '.slider-button_navigate_prev',
  },
});

new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button_navigate_next.reviews__button',
    prevEl: '.reviews__button_navigate_prev.reviews__button',
  },
});
