document.addEventListener('DOMContentLoaded', function() {
  let subMenuTogglers = document.querySelectorAll('.js-submenu-toggler');
  let menu = document.querySelector('.main-menu__links--type_1');
  let subMenuContainers = document.querySelectorAll('.main-menu__item');

  subMenuTogglers.forEach((toggler, index) => {
    let parent = toggler.closest('.main-menu__item');
    let subMenu = parent.querySelector('.submenu');

    toggler.addEventListener('click', function (event) {
      if(toggler.classList.contains('is-active')) {

        subMenu.style.height = "0px"

      	subMenu.addEventListener('transitionend', () => {
          subMenu.classList.remove('is-open');
          toggler.classList.remove('is-active');
        }, {once: true});
      } else {
        toggler.classList.add('is-active');
        subMenu.classList.add('is-open');

        subMenu.style.height = "auto";

      	let height = subMenu.clientHeight + "px"

        subMenu.style.height = "0px"

        setTimeout(() => {
          subMenu.style.height = height
        }, 10);
      }
    });
  });

  if(window.innerWidth >= 1300) {
    subMenuContainers.forEach((handler, index) => {
      let subMenu = handler.querySelector('.submenu');

      handler.addEventListener('mouseover', function (event) {
        let height = subMenu.clientHeight + "px";

        subMenu.classList.remove('is-open');
        menu.style.height = "auto";

        subMenu.classList.add('is-open');
        menu.style.height = height;

      });

      handler.addEventListener('mouseout', function (event) {
        subMenu.classList.remove('is-open');
        menu.style.height = "auto";
      });
    });
  }
});
