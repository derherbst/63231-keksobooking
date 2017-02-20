'use strict';

// var pin = document.querySelectorAll('.pin');
var pinMap = document.querySelector('.tokyo__pin-map');
var dialogWindow = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var numberOfRooms = document.querySelector('#room_number');
var numberOfGuests = document.querySelector('#capacity');
var noticeForm = document.querySelector('.notice__form');
var noticeTitle = noticeForm.querySelector('#title');
var noticePrice = noticeForm.querySelector('#price');
var noticeAddress = noticeForm.querySelector('#address');

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

// валидация форм
noticeTitle.required = 'true';
noticeTitle.minLength = 30;
noticeTitle.maxLength = 100;

noticePrice.required = true;
noticePrice.type = 'number';
noticePrice.min = 1000;
noticePrice.max = 1000000;

noticeAddress.required = true;

var checkIn = document.querySelector('#time');
var checkOut = document.querySelector('#timeout');
// var checkOption = document.querySelector('option');

checkIn.addEventListener('change', function () {
  checkOut.value = checkIn.value;
});

checkOut.addEventListener('change', function () {
  checkIn.value = checkOut.value;
});

// тип жилья
var appsType = document.querySelector('#type');

appsType.addEventListener('change', function () {
  if (appsType.value === 'Квартира') {
    noticePrice.value = 1000;
    noticePrice.min = 1000;
  } else if (appsType.value === 'Лачуга') {
    noticePrice.value = 0;
    noticePrice.min = 0;
  } else {
    noticePrice.value = 1000000;
    noticePrice.min = 10000;
  }
});

// количество комнат
numberOfRooms.addEventListener('change', function () {
  if (numberOfRooms.value === '2 комнаты' || numberOfRooms.value === '100 комнат') {
    numberOfGuests.value = 'для 3 гостей';
  } else {
    numberOfGuests.value = 'не для гостей';
  }
});

numberOfGuests.addEventListener('change', function () {
  if (numberOfGuests.value === 'для 3 гостей') {
    numberOfRooms.value = '2 комнаты';
  } else {
    numberOfRooms.value = '1 комната';
  }
});
