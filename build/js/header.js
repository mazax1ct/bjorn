var page = document.querySelector('.page');
var header = document.querySelector('.header');
var mainMenu = document.querySelector('.main-menu');
var menuOpener = document.querySelector('.js-main-menu-opener');
var menuCloser = document.querySelector('.js-main-menu-closer');
var shade = document.querySelector('.page__shade');
var menuIsOpen = false;

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
    header.classList.remove('header--color-transition');
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
    header.classList.add('header--menu-is-open');
    setTimeout(() => {
      header.classList.add('header--color-transition');
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
      header.classList.remove('header--color-transition');
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

var searchOpener = document.querySelector('.js-search-opener');
var searchCloser = document.querySelector('.js-search-closer');
var search = document.querySelector('.search');

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
      header.classList.remove('header--color-transition');
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
    search.classList.add('is-open');
    header.classList.add('header--menu-is-open');
    shade.classList.add('page__shade--menu-is-open');
  }
});

//обработчик события закрытия поиска
searchCloser.addEventListener('click', function (event) {
  searchClose();
});

/***************************************************************************************************/
var searchInput = document.querySelector('.js-search-input');
var searchInputCleaner = document.querySelector('.js-search-input-cleaner');
var searchTags = document.querySelectorAll('.js-search-tag');

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
var searchForm = document.querySelector('.search__form');
var searchPopular = document.querySelector('.search__popular');
var searchResult = document.querySelector('.js-search-result');
var searchResultEmpty = document.querySelector('.js-search-result-empty');
var searchLoader = document.querySelector('.js-search-loader');

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
