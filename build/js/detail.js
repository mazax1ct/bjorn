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

    /*document.addEventListener('wheel', (e) => {
      e.preventDefault();
    	if (e.wheelDeltaY < 0) {
        if(currentThumbIndex <= thumbsAll.length - 1 && thumbsAll[currentThumbIndex + 1] != undefined) {
          thumbsAll[currentThumbIndex].classList.remove('is-active');
          thumbsAll[currentThumbIndex + 1].click();
          thumbsAll[currentThumbIndex + 1].classList.add('is-active');
          currentThumbIndex = currentThumbIndex + 1;
          scrollImages = true;
        } else {
          scrollImages = false;
        }
      } else {
        if(!scrollImages) {
          thumbsAll[currentThumbIndex].classList.remove('is-active');
          thumbsAll[thumbsAll.length - 1].click();
          thumbsAll[thumbsAll.length - 1].classList.add('is-active');
          currentThumbIndex = thumbsAll.length - 1;
          scrollImages = true;
        } else {
          if(currentThumbIndex <= thumbsAll.length && thumbsAll[currentThumbIndex - 1] != undefined) {
            thumbsAll[currentThumbIndex].classList.remove('is-active');
            thumbsAll[currentThumbIndex - 1].click();
            thumbsAll[currentThumbIndex - 1].classList.add('is-active');
            currentThumbIndex = currentThumbIndex - 1;
            scrollImages = true;
          }
        }
      }
    });*/
  }

  /*let thumbs = document.querySelectorAll('.detail__thumb');

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', function (event) {
      thumbs.forEach((thumb) => {
        thumb.classList.remove('is-active');
      });

      thumbs[index].classList.add('is-active');
    });
  });*/
});
