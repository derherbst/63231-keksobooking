'use strict';

window.initializePins = function (pinMap, dialogWindow, dialogClose) {
  var ENTER_KEY = 13;

  // удаляем активные классы у меток
  var removeActive = function () {
    var pinActive = document.querySelector('.pin--active');

    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
  };

  var closeDialog = function () {
    dialogWindow.style.display = 'none';
    removeActive();
    dialogClose.setAttribute('aria-pressed', true);
  };

  var clickLegacy = function () {
    var target = event.target;

    while (target !== pinMap) {
      if (target.className === 'pin') {
        target.classList.add('pin--active');
      }
      target = target.parentNode;
    }
  };

  // обработчик события по клику на пин
  var togglePin = function (event) {
    removeActive();
    clickLegacy();
    dialogWindow.style.display = 'block';
    dialogClose.setAttribute('aria-pressed', false);
  };

  var isActivateEvent = function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY;
  };

  // создадим цикл который проверяет наличие у .pin еще одного класса .pin--active
  // если класс есть, удаляем его
  // цикл больше не нужен так как мы делегируем клики на саму карту с пинами
  // for (var i = 0; i < pin.length; i++) {
  //  pin[i].addEventListener('click', togglePin);
  //  pin[i].addEventListener('keydown', togglePin);
  // }

  pinMap.addEventListener('click', togglePin);
  pinMap.addEventListener('keydown', togglePin);

  // обработчик события закрытия окна и удаления активного класса у элемента по клику на крестик
  dialogClose.addEventListener('click', function () {
    closeDialog();
    removeActive();
  });

  // обработчик события по нажатию на клавишу
  dialogClose.addEventListener('keydown', function (event) {
    if (isActivateEvent(event)) {
      closeDialog();
      event.target.setAttribute('aria-pressed', true);
    }
  });
};
