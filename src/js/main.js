document.addEventListener('DOMContentLoaded', function() {
  let promo9Sliders = document.querySelectorAll('.js-promo-9-slider');
  let promo9Thumbs = document.querySelectorAll('.js-promo-9-thumbs');

  promo9Thumbs.forEach((promo9Thumb, index) => {
    new Swiper(promo9Thumb, {
      loop: true,
      effect: "fade",
      slidesPerView: 1,
      spaceBetween: 0,
      noSwiping: true,
      simulateTouch: false,
      watchSlidesProgress: true,
    });
  });

  promo9Sliders.forEach((promo9Slider, index) => {
    new Swiper(promo9Slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 4,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-pagination[data-pager="'+promo9Slider.dataset.pager+'"]',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next[data-arrows="'+promo9Slider.dataset.arrows+'"]',
        prevEl: '.swiper-button-prev[data-arrows="'+promo9Slider.dataset.arrows+'"]',
      },
      thumbs: {
        swiper: promo9Thumbs[index]
      },
    });
  });

  let promo10Sliders = document.querySelectorAll('.js-promo-10-slider');

  promo10Sliders.forEach((promo10Slider) => {
    new Swiper(promo10Slider, {
      loop: true,
      pagination: {
        el: '.swiper-pagination[data-pager="'+promo10Slider.dataset.pager+'"]',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next[data-arrows="'+promo10Slider.dataset.arrows+'"]',
        prevEl: '.swiper-button-prev[data-arrows="'+promo10Slider.dataset.arrows+'"]',
      }
    });
  });
});
