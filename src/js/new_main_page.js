document.addEventListener('DOMContentLoaded', function() {
  if(window.innerWidth < 1024) {
    const verticalMobileSlider = new Swiper('.js-vertical-mobile-slider', {
      direction: 'vertical',
      loop: false,
      pagination: {
        el: '.js-vms-pagination'
      },
      navigation: {
        nextEl: '.js-vertical-mobile-slider-next',
        prevEl: 'js-vertical-mobile-slider-prev',
      }
    });
  }

  let horizontalSliders = document.querySelectorAll('.js-horizontal-slider');

  horizontalSliders.forEach((slider, index) => {
    let sliderInst = new Swiper(slider, {
      loop: true,
      autoplay: {
         delay: 5000,
       },
       speed: 400,
      pagination: {
        el: '.swiper-pagination[data-pager="'+slider.dataset.pager+'"]',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next[data-arrows="'+slider.dataset.arrows+'"]',
          prevEl: '.swiper-button-prev[data-arrows="'+slider.dataset.arrows+'"]',
        },
        breakpoints: {
          1280: {
            speed: 400
          }
        },
        on: {
          afterInit: function () {
            setTimeout(() => {
              let video = slider.querySelectorAll(".swiper-slide-active video");

              if(video.length) {
                sliderInst.autoplay.stop();
                video[0].play();
                video[0].addEventListener('ended', () => {
                  setTimeout(() => {
                    video[0].currentTime = 0;
                    sliderInst.slideNext();
                    sliderInst.autoplay.start();
                  }, 500);
                });
              }
            }, 100);
          },

          slideChangeTransitionStart: function () {
            let videos = slider.querySelectorAll(".swiper-slide video");
            videos.forEach((video) => {
              video.pause();
              video.currentTime = 0;
            });
          },

          slideChangeTransitionEnd: function () {
            setTimeout(() => {
              let video = slider.querySelectorAll(".swiper-slide-active video");

              if(video.length) {
                sliderInst.autoplay.stop();
                video[0].play();
                video[0].addEventListener('ended', () => {
                  setTimeout(() => {
                    video[0].currentTime = 0;
                    sliderInst.slideNext();
                    sliderInst.autoplay.start();
                  }, 500);
                });
              }
            }, 100);
          }
        },
    });
  })
});
