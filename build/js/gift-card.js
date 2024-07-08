const thumbs = new Swiper(".js-gift-card-thumbs", {
  loop: true,
  spaceBetween: 6,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1024: {
      slidesPerView: 5
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 12
    }
  }
});

const slider = new Swiper(".js-gift-card-image", {
  loop: true,
  spaceBetween: 8,
  thumbs: {
    swiper: thumbs
  },
});
