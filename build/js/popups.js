var popupOpeners = document.querySelectorAll('.js-popup-open');
var popupClosers = document.querySelectorAll('.js-popup-close');

//функция закрытия попапа
function popupClose(popup) {
  var openedPopup = document.querySelector('.popup.is-open');

  //скрываем попап
  openedPopup.classList.remove('is-open');

  //скрываем подложку
  fadeOut(shade, POPUPS_ANIMATION_DURATION);

  //снимаем обработчик события закрытия попапа с подложки
  shade.removeEventListener('click', popupClose);

  //снимаем классы со страницы
  setTimeout(function() {
    page.classList.remove('is-overflow');

    shade.classList.remove('page__shade--popup-is-open');
  }, POPUPS_ANIMATION_DURATION);
}

popupOpeners.forEach((opener) => {
  opener.addEventListener('click', function (event) {
    var popupId = opener.dataset.popup;
    var popup = document.querySelector('#' + popupId);

    if(!menuIsOpen) {
      //убираем скролл страницы
      page.classList.add('is-overflow');
      //показываем подложку
      fadeIn(shade, POPUPS_ANIMATION_DURATION, 'block');

      shade.classList.add('page__shade--popup-is-open');

      //вешаем обработчик события закрытия попапа на подложку
      shade.addEventListener('click', popupClose);

      //показываем попап
      popup.classList.add('is-open');
    } else {
      //скрываем меню
      mainMenu.classList.remove('is-open');

      //снимаем классы со страницы
      shade.classList.remove('page__shade--menu-is-open');
      shade.classList.add('page__shade--popup-is-open');

      //снимаем обработчик события закрытия меню с подложки
      shade.removeEventListener('click', menuClose);

      //ставим отметку о том что меню закрыто
      menuIsOpen = false;

      setTimeout(function() {
        header.classList.remove('header--menu-is-open');
        header.classList.remove('header--color-transition');

        //показываем попап
        popup.classList.add('is-open');

        //вешаем обработчик события закрытия попапа на подложку
        shade.addEventListener('click', popupClose);
      }, POPUPS_ANIMATION_DURATION);
    }
  });
});

popupClosers.forEach((closer) => {
  var popupId = closer.dataset.popup;
  var popup = document.querySelector('#' + popupId);

  closer.addEventListener('click', popupClose);
});
