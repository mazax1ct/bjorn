let page = document.querySelector('.page');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.main-menu');
let menuOpener = document.querySelector('.js-main-menu-opener');
let menuCloser = document.querySelector('.js-main-menu-closer');
let shade = document.querySelector('.page__shade');
let menuIsOpen = false;

//функция закрытия меню
function menuClose() {
  //скрываем меню
  mainMenu.classList.remove('is-open');

  setTimeout(() => {
    mainMenu.classList.remove('is-block');
  }, POPUPS_ANIMATION_DURATION);

  //скрываем подложку
  fadeOut(shade, POPUPS_ANIMATION_DURATION);
  shadeIsShow = false;

  //снимаем классы со страницы
  setTimeout(function() {
    page.classList.remove('is-overflow');
    header.classList.remove('header--menu-is-open');
    //header.classList.remove('header--color-transition');
    shade.classList.remove('page__shade--menu-is-open');
  }, POPUPS_ANIMATION_DURATION);

  //снимаем обработчик события закрытия меню с подложки
  shade.removeEventListener('click', menuClose);

  //ставим отметку о том что меню закрыто
  menuIsOpen = false;
}

//обработчик события открытия меню
menuOpener.addEventListener('click', function (event) {
  //если меню НЕ открыто
  if(!menuIsOpen) {
    //убираем скролл страницы
    page.classList.add('is-overflow');

    //показываем подложку
    fadeIn(shade, POPUPS_ANIMATION_DURATION, 'block');
    shadeIsShow = true;

    //вешаем обработчик события закрытия меню на подложку
    shade.addEventListener('click', menuClose);

    //показываем меню и вешаем вспомогательный класс для открытия меню/поиска
    mainMenu.classList.add('is-block');

    setTimeout(() => {
      mainMenu.classList.add('is-open');
    }, 10);

    header.classList.add('header--no_color_transition');

    header.classList.add('header--menu-is-open');

    setTimeout(() => {
      header.classList.remove('header--no_color_transition');
    }, 10);

    shade.classList.add('page__shade--menu-is-open');

    //ставим отметку о том что меню открыто
    menuIsOpen = true;
  } else {
    //скрываем меню
    mainMenu.classList.remove('is-open');
    setTimeout(() => {
      mainMenu.classList.remove('is-block');
    }, POPUPS_ANIMATION_DURATION);

    //скрываем подложку
    shade.removeEventListener('click', menuClose);
    fadeOut(shade, POPUPS_ANIMATION_DURATION);
    shadeIsShow = false;

    //возвращаем скролл старницы и убираем вспомогательный класс для открытия меню/поиска
    setTimeout(function() {
      page.classList.remove('is-overflow');
      header.classList.remove('header--menu-is-open');
      //header.classList.remove('header--color-transition');
      shade.classList.remove('page__shade--menu-is-open');
    }, POPUPS_ANIMATION_DURATION);

    //ставим отметку о том что меню закрыто
    menuIsOpen = false;
  }
});

//обработчик события закрытия меню
menuCloser.addEventListener('click', function (event) {
  menuClose();
});

/***************************************************************************************************/

let searchOpener = document.querySelector('.js-search-opener');
let searchCloser = document.querySelector('.js-search-closer');
let search = document.querySelector('.search');

//функция закрытие поиска
function searchClose() {
  //закрываем поиск
  search.classList.remove('is-open');
  setTimeout(() => {
    search.classList.remove('is-block');
  }, POPUPS_ANIMATION_DURATION);

  //если меню НЕ открыто
  if(!menuIsOpen) {
    //скрываем подложку
    fadeOut(shade, POPUPS_ANIMATION_DURATION);
    shadeIsShow = false;

    //снимаем классы со страницы
    setTimeout(function() {
      page.classList.remove('is-overflow');
      header.classList.remove('header--menu-is-open');
      //header.classList.remove('header--color-transition');
      shade.classList.remove('page__shade--menu-is-open');
    }, POPUPS_ANIMATION_DURATION);
  } else { //если меню открыто
    //снимаем обработчик события закрытия поиска с подложки
    shade.removeEventListener('click', searchClose);

    //вешаем обработчик события закрытия меню на подложку
    shade.addEventListener('click', menuClose);
  }
}

//обработчик события открытия поиска
searchOpener.addEventListener('click', function (event) {
  //если меню НЕ открыто
  if(!menuIsOpen) {
    //убираем скролл страницы
    page.classList.add('is-overflow');

    //показываем подложку
    fadeIn(shade, POPUPS_ANIMATION_DURATION, 'block');
    shadeIsShow = true;

    //вешаем обработчик события закрытия поиска на подложку
    shade.addEventListener('click', searchClose);

    //показываем поиск
    search.classList.add('is-block');
    setTimeout(() => {
      search.classList.add('is-open');
    }, 10);
    header.classList.add('header--menu-is-open');
    shade.classList.add('page__shade--menu-is-open');
  } else {
    //снимаем событие закрытия меню с подложки
    shade.removeEventListener('click', menuClose);

    //вешаем событие закрытия поиска
    shade.addEventListener('click', searchClose);

    //показываем поиск
    search.classList.add('is-block');
    setTimeout(() => {
      search.classList.add('is-open');
    }, 10);
    header.classList.add('header--menu-is-open');
    shade.classList.add('page__shade--menu-is-open');
  }
});

//обработчик события закрытия поиска
searchCloser.addEventListener('click', function (event) {
  searchClose();
});

/***************************************************************************************************/
let searchInput = document.querySelector('.js-search-input');
let searchInputCleaner = document.querySelector('.js-search-input-cleaner');
let searchTags = document.querySelectorAll('.js-search-tag');

//обработчик события ввода текста в поле поиска
searchInput.addEventListener('input', function (event) {
  if(event.target.value.length > 0) {
    searchInputCleaner.classList.add('is-active');
  } else {
    searchInputCleaner.classList.remove('is-active');
  }
});

//обработчик события очистки поля поиска
searchInputCleaner.addEventListener('click', function (event) {
  searchInput.value = '';
  searchInputCleaner.classList.remove('is-active');
});

//обработчик события поиска по тегам
searchTags.forEach((tag) => {
  tag.addEventListener('click', function (event) {
    searchInput.value = event.target.outerText;
    searchInputCleaner.classList.add('is-active');
  });
});

/***************************************************************************************************/
let searchForm = document.querySelector('.search__form');
let searchPopular = document.querySelector('.search__popular');
let searchResult = document.querySelector('.js-search-result');
let searchResultEmpty = document.querySelector('.js-search-result-empty');
let searchLoader = document.querySelector('.js-search-loader');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  fadeIn(searchLoader, POPUPS_ANIMATION_DURATION, 'flex');

  setTimeout(() => {
    fadeOut(searchPopular, 0);

    if(searchInput.value.length > 0) {
      fadeIn(searchResult, 0);
      fadeOut(searchResultEmpty, 0);
    } else {
      fadeIn(searchResultEmpty, 0);
      fadeOut(searchResult, 0);
    }
  }, 1000);

  setTimeout(() => {
    fadeOut(searchLoader, POPUPS_ANIMATION_DURATION);
  }, 2500);
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header--transparent');

  if(header !== null) {
    window.addEventListener('scroll', function() {
      if (pageYOffset > 0) {
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
    });
  }
});
