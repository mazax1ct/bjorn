document.addEventListener('DOMContentLoaded', function() {
  let sliders = document.querySelectorAll('.js-cards-slider-free');

  sliders.forEach((slider) => {
    new Swiper(slider, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 4,
      freeMode: true,
      slidesOffsetBefore: 8,
      slidesOffsetAfter: 8,
      breakpoints: {
        768: {
          spaceBetween: 8,
          slidesOffsetBefore: 8,
          slidesOffsetAfter: 8
        },
        1300: {
          spaceBetween: 8,
          slidesOffsetBefore: 8,
          slidesOffsetAfter: 8
        },
        1600: {
          spaceBetween: 12,
          slidesOffsetBefore: 12,
          slidesOffsetAfter: 12
        }
      }
    });
  })
});
