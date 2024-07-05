document.addEventListener('DOMContentLoaded', function() {
  let prevScrollpos = window.pageYOffset;

  var startBanner = document.querySelector('.banner--start');
  var startBannerHeight = startBanner.offsetHeight;
  var header = document.querySelector('.header');
  var headerHeight = header.offsetHeight;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if(currentScrollPos >= (startBannerHeight - headerHeight)) {
      header.classList.add('header--no_color_transition');

      setTimeout(() => {
        header.classList.add('header--white');
        header.classList.remove('header--transparent');
      }, 10);

      setTimeout(() => {
        header.classList.remove('header--no_color_transition');
      }, 10);
    } else {
      header.classList.add('header--no_color_transition');

      setTimeout(() => {
        header.classList.remove('header--white');
        header.classList.add('header--transparent');
      }, 10);

      setTimeout(() => {
        header.classList.remove('header--no_color_transition');
      }, 10);
    }

    prevScrollpos = currentScrollPos;
  }
});
