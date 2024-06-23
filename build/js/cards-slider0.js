document.addEventListener('DOMContentLoaded', function() {
  var sliders = document.querySelectorAll('.js-cards-slider');

  sliders.forEach((slider) => {
    new Swiper(slider, {
      loop: true,
      slidesPerView: slider.dataset.sQnt,
      spaceBetween: 2,
      breakpoints: {
        768: {
          slidesPerView: slider.dataset.smQnt,
          spaceBetween: 8
        },
        1300: {
          slidesPerView: slider.dataset.lgQnt,
          spaceBetween: 8
        },
        1600: {
          slidesPerView: slider.dataset.fhdQnt,
          spaceBetween: 12
        }
      },

      navigation: {
        nextEl: '.swiper-button-next[data-arrows="'+slider.dataset.arrows+'"]',
        prevEl: '.swiper-button-prev[data-arrows="'+slider.dataset.arrows+'"]',
      }
    });
  })
});
