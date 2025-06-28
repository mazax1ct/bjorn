document.addEventListener('DOMContentLoaded', function() {
  let tabsNav = document.querySelectorAll('.js-tab-nav');
  let tabs = document.querySelectorAll('.js-tab');

  tabsNav.forEach((tabNav, index) => {
    tabNav.addEventListener('click', function (event) {
      let target = tabNav.dataset.target;

      tabsNav.forEach((tabNav) => {
        tabNav.classList.remove('is-active');
      });

      tabsNav[index].classList.add('is-active');

      tabs.forEach((tab, index) => {
        tab.classList.remove('is-active');
      });

      let tab = document.querySelector('.js-tab[data-target="'+ target +'"]');
      tab.classList.add('is-active');
    });
  });
});
