document.addEventListener('DOMContentLoaded', function() {
  const catalogMenuSlider = new Swiper('.js-catalog-menu-slider', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".js-catalog-menu-next",
      prevEl: ".js-catalog-menu-prev",
    }
  });
});
