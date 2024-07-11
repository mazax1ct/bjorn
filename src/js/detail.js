document.addEventListener('DOMContentLoaded', function() {
  const thumbs = new Swiper('.js-detail-thumbs', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 4,
    watchSlidesProgress: true
  });

  const detailSlider = new Swiper('.js-detail-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    thumbs: {
      swiper: thumbs
    }
  });
});
