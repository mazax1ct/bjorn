document.addEventListener('DOMContentLoaded', function() {
  let prevScrollpos = window.pageYOffset;

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

  if(window.innerWidth >= 1300) {
    var detail = document.querySelector('.detail');
    var detailHeight = detail.offsetHeight;
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;
    let thumbsAll = document.querySelectorAll('.detail__thumb');
    let currentThumbIndex = 0;
    let scrollImages = true;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if(currentScrollPos >= (detailHeight - headerHeight)) {
        header.classList.add('header--no_color_transition');

        setTimeout(() => {
          header.classList.add('header--white');
        }, 10);

        setTimeout(() => {
          header.classList.remove('header--no_color_transition');
        }, 10);
      } else {
        header.classList.add('header--no_color_transition');
        
        setTimeout(() => {
          header.classList.remove('header--white');
        }, 10);

        setTimeout(() => {
          header.classList.remove('header--no_color_transition');
        }, 10);
      }

      prevScrollpos = currentScrollPos;
    }
  }
});
