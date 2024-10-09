document.addEventListener('DOMContentLoaded', function() {
  if(window.innerWidth < 1024) {
    const verticalMobileSlider = new Swiper('.js-vertical-mobile-slider', {
      direction: 'vertical',
      loop: false,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.js-vertical-mobile-slider-next',
        prevEl: 'js-vertical-mobile-slider-prev',
      }
    });
  }

  var swiper2 = new Swiper(".mySwiper2", {
      pagination: {
        clickable: true,
      }
    });
});
