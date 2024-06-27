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

  if(window.innerWidth >= 1300) {
    let slides = document.querySelectorAll('.heroes-slider__slide');
    let prev = document.querySelector('.heroes-slider__prev');
    let next = document.querySelector('.heroes-slider__next');
    let currIndex = 0;

    slides[currIndex].classList.add('is-active');
    slides[currIndex + 1].classList.add('is-active');

    prev.addEventListener('click', function (event) {
      if(currIndex - 2 >= 0) {
        slides[currIndex].classList.remove('is-active');
        slides[currIndex + 1].classList.remove('is-active');

        slides[currIndex - 1].classList.add('is-active');
        slides[currIndex - 2].classList.add('is-active');

        currIndex = currIndex - 2;
      } else {
        slides[currIndex].classList.remove('is-active');
        slides[currIndex + 1].classList.remove('is-active');


        slides[slides.length - 1].classList.add('is-active');
        slides[slides.length - 2].classList.add('is-active');

        currIndex = slides.length - 2;

      }
    });

    next.addEventListener('click', function (event) {
      if(currIndex + 2 < slides.length) {
        slides[currIndex].classList.remove('is-active');
        slides[currIndex + 1].classList.remove('is-active');

        slides[currIndex + 2].classList.add('is-active');
        slides[currIndex + 3].classList.add('is-active');

        currIndex = currIndex + 2;
      } else {
        slides[currIndex].classList.remove('is-active');
        slides[currIndex + 1].classList.remove('is-active');

        currIndex = 0;

        slides[currIndex].classList.add('is-active');
        slides[currIndex + 1].classList.add('is-active');
      }
    });
  }
});
