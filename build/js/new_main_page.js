let sliderInst;

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
        enabled: true,
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 400,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination[data-pager="'+slider.dataset.pager+'"]',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next[data-arrows="'+slider.dataset.arrows+'"]',
        prevEl: '.swiper-button-prev[data-arrows="'+slider.dataset.arrows+'"]',
      },
      breakpoints: {
        1024: {
          speed: 800
        }
      },
      on: {
        afterInit: function () {
          setTimeout(() => {
            let video = slider.querySelector(".swiper-slide-active video");
            if(video != null) {
              sliderInst.autoplay.stop();
              video.play();
              video.addEventListener('ended', () => {
                setTimeout(() => {
                  video.currentTime = 0;
                  sliderInst.slideNext();
                  sliderInst.params.autoplay.delay = 5000;
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
            let video = sliderInst.slides[sliderInst.activeIndex].querySelector("video");
            if(video != null) {
              sliderInst.autoplay.stop();
              video.play();
              video.addEventListener('ended', () => {
                setTimeout(() => {
                  video.currentTime = 0;
                  sliderInst.slideNext();
                  sliderInst.params.autoplay.delay = 5000;
                  sliderInst.autoplay.start();
                }, 500);
              });
            }
          }, 100);
        }
      },
    });
  });


  let storiesSliders = document.querySelectorAll('.js-stories-slider');

  storiesSliders.forEach((slider, index) => {
    sliderInst = new Swiper(slider.querySelector('.swiper'), {
      loop: true,
      autoplay: {
        enabled: true,
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 400,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination[data-pager="'+slider.dataset.pager+'"]',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next[data-arrows="'+slider.dataset.arrows+'"]',
        prevEl: '.swiper-button-prev[data-arrows="'+slider.dataset.arrows+'"]',
      },
      breakpoints: {
        1024: {
          loop: false,
          slidesPerView: 'auto',
          spaceBetween: 12,
          autoplay: {
            enabled: false
          },
          pagination: {
            enabled: false
          },
          slidesOffsetAfter: 24,
          slidesOffsetBefore: 24
        },
        1300: {
          loop: false,
          slidesPerView: 'auto',
          spaceBetween: 12,
          autoplay: {
            enabled: false
          },
          pagination: {
            enabled: false
          },
          slidesOffsetAfter: 40,
          slidesOffsetBefore: 40
        },
        1920: {
          loop: false,
          slidesPerView: 'auto',
          spaceBetween: 12,
          autoplay: {
            enabled: false
          },
          pagination: {
            enabled: false
          },
          slidesOffsetAfter: (window.innerWidth - 1920) / 2 + 40,
          slidesOffsetBefore: (window.innerWidth - 1920) / 2 + 40,
        }
      },
      on: {
        resize: function () {
          if(window.innerWidth >= 1920) {
            sliderSideOffset = (window.innerWidth - 1920) / 2 + 40;
            sliderInst.params.slidesOffsetAfter = sliderSideOffset;
            sliderInst.params.slidesOffsetBefore = sliderSideOffset;

              sliderInst.update();

          }
        },
      }
    });
  });
});
