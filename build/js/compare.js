document.addEventListener('DOMContentLoaded', function() {
  let prevScrollpos = window.pageYOffset;
  let header = document.querySelector('.header');
  let headerHeight = header.offsetHeight;

  let compareHead = document.querySelector('.compare__head');
  let compareCards = document.querySelector('.compare__cards');
  let compareCardsOffsetTop = compareCards.offsetTop;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if(currentScrollPos >= (compareCardsOffsetTop - headerHeight)) {
      compareHead.classList.add('is-fixed');
      compareHead.style.top = Math.round(headerHeight) - 1 + 'px';
    } else {
      compareHead.classList.remove('is-fixed');
      compareHead.style.top = '0px';
    }

    prevScrollpos = currentScrollPos;
  }
});
