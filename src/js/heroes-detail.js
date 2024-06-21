document.addEventListener('DOMContentLoaded', function() {
  let prevScrollpos = window.pageYOffset;

  if(window.innerWidth >= 1300) {
    var startBanner = document.querySelector('.start-banner');
    var startBannerHeight = startBanner.offsetHeight;
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if(currentScrollPos >= (startBannerHeight - headerHeight)) {
        header.classList.add('header--color-transition');
        setTimeout(() => {
          header.classList.add('header--white');
        }, 1);
      } else {
        header.classList.remove('header--color-transition');
        header.classList.remove('header--white');
      }

      prevScrollpos = currentScrollPos;
    }
  }
});
