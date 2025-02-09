document.addEventListener('DOMContentLoaded', function() {
  let pvzSearchInput = document.querySelector('.js-pvz-search-input');
  let pvzSearchInputCleaner = document.querySelector('.js-pvz-search-input-cleaner');

  //обработчик события ввода текста в поле поиска
  pvzSearchInput.addEventListener('input', function (event) {
    if(event.target.value.length > 0) {
      pvzSearchInputCleaner.classList.add('is-active');
    } else {
      pvzSearchInputCleaner.classList.remove('is-active');
    }
  });

  //обработчик события очистки поля поиска
  pvzSearchInputCleaner.addEventListener('click', function (event) {
    pvzSearchInput.value = '';
    pvzSearchInputCleaner.classList.remove('is-active');
  });


  let pvzTabsNav = document.querySelectorAll('.js-pvz-tab-nav');
  let pvzTabs = document.querySelectorAll('.js-pvz-tab');

  pvzTabsNav.forEach((tabNav, index) => {
    tabNav.addEventListener('click', function (event) {
      let target = tabNav.dataset.target;

      pvzTabsNav.forEach((tabNav) => {
        tabNav.classList.remove('is-active');
      });

      pvzTabsNav[index].classList.add('is-active');

      pvzTabs.forEach((pvzTab, index) => {
        pvzTab.classList.remove('is-active');
      });

      let tab = document.querySelector('.js-pvz-tab[data-target="'+ target +'"]');
      tab.classList.add('is-active');
    });
  });
});
