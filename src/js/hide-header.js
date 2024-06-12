document.addEventListener('DOMContentLoaded', function() {
  var prevScrollpos = window.pageYOffset;
  var header = document.querySelector('.header');
  var headerHeight = header.offsetHeight;
  var catalogTop = document.querySelector('.catalog-top');
  var catalogTopHeight = catalogTop.offsetHeight;
  var catalogTopOffsetTop = catalogTop.offsetTop;
  var catalogTopInner = document.querySelector('.catalog-top__inner');
  var catalogTopMenu = document.querySelector('.catalog-top__menu');
  var catalogMenu = document.querySelector('.catalog-menu');

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if(currentScrollPos >= (catalogTopOffsetTop - headerHeight)) {
      catalogMenu.classList.add('is-fixed');
      catalogMenu.style.top = Math.round(headerHeight) - 1 + 'px';
      catalogTopMenu.classList.add('menu-is-fixed');
    } else {
      catalogMenu.classList.remove('is-fixed');
      catalogTopMenu.classList.remove('menu-is-fixed');
    }

    if (prevScrollpos > currentScrollPos) {
      header.classList.remove('is-out');
      catalogTop.classList.add('is-out');
    } else {
      header.classList.add('is-out');
      catalogTop.classList.remove('is-out');
    }

    prevScrollpos = currentScrollPos;
  }
});
