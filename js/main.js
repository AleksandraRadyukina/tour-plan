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

$('.parallax-window').parallax({imageSrc: 'img/newsletter-bg.jpg'});

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

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
  console.log('Клик по кнопке меню');
  document.querySelector(".navbar-menu").classList.toggle("navbar-menu--visible");
})