document.addEventListener('DOMContentLoaded', function() {
  let prevScrollpos = window.pageYOffset;
  let header = document.querySelector('.header');
  let headerHeight = header.offsetHeight;

  let catalogTop = document.querySelector('.catalog-top');
  let catalogTopOffsetTop = catalogTop.offsetTop;

  let catalogTopMenu = document.querySelector('.catalog-top__menu');
  let catalogMenu = document.querySelector('.catalog-menu');

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

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
