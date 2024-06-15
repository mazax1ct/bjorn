document.addEventListener('DOMContentLoaded', function() {
  let prevScrollpos = window.pageYOffset;

  if(window.innerWidth >= 1300) {
    const thumbs = new Swiper('.js-detail-thumbs', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 4
    });
  }

  if(window.innerWidth < 1300) {
    const detailSlider = new Swiper('.js-detail-slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
    });
  }

  if(window.innerWidth >= 1300) {
    var detail = document.querySelector('.detail');
    var detailHeight = detail.offsetHeight;
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if(currentScrollPos >= (detailHeight - headerHeight)) {
        header.classList.add('header--color-transition');
        setTimeout(() => {
          header.classList.add('header--white');
        }, 10);
      } else {
        header.classList.remove('header--color-transition');
        header.classList.remove('header--white');
      }

      prevScrollpos = currentScrollPos;
    }
  }

  let thumbs = document.querySelectorAll('.detail__thumb');

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', function (event) {
      thumbs.forEach((thumb) => {
        thumb.classList.remove('is-active');
      });

      thumbs[index].classList.add('is-active');
    });
  });
});
