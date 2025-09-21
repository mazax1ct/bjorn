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

let compare = document.querySelector('.js-add-to-compare');

compare.addEventListener('click', function (event) {
  let icon = compare.querySelector('use');
  let text = compare.querySelector('span');
  if(!compare.classList.contains('is-active')){
    icon.setAttribute('xlink:href', 'images/sprite.svg#check_icon');
    text.innerHTML = 'в сравнении';
    compare.classList.add('is-active');
  } else {
    icon.setAttribute('xlink:href', 'images/sprite.svg#compare_icon');
    text.innerHTML = 'Сравнить';
    compare.classList.remove('is-active');
  }
});
