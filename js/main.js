$(document).ready(function (){
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
  
  const menuButton = $(".menu-button");
  menuButton.on('click', function() {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
  })

  const modalButton = $('[data-toggle="modal"]');
  const closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)

  function openModal() {
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(".form").each(function() {
    $('.modal__phone').mask('(000) 000-0000'),
    $('.footer__phone').mask('(000) 000-0000'),
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least two letters",
        },
        phone: {
          required: "Please enter your phone number",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  })

  AOS.init();
})