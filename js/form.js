'use strict';

var pinMap = document.querySelector('.tokyo__pin-map');
var pin = pinMap.querySelectorAll('.pin');
var dialogWindow = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var numberOfRooms = document.querySelector('#room_number');
var numberOfGuests = document.querySelector('#capacity');
var noticeForm = document.querySelector('.notice__form');
var noticeTitle = noticeForm.querySelector('#title');
var noticePrice = noticeForm.querySelector('#price');
var noticeAddress = noticeForm.querySelector('#address');

var ENTER_KEY = 13;

var REQUIRED_FIELD = true;
var TITLE_MIN_LENGTH = 30;
var TITLE_MAX_LENGTH = 100;
var PRICE_TYPE = 'number';
var PRICE_MIN = 1000;
var PRICE_MAX = 1000000;

var showElement = function (element) {
  element.style.display = 'block';
};

// удаляем активные классы у меток
var removeActive = function () {
  for (var j = 0; j < pin.length; j++) {
    pin[j].classList.remove('pin--active');
  }
};

var closeDialog = function (element) {
  dialogWindow.style.display = 'none';
  removeActive();
};

// обработчик события по клику на пин
var togglePin = function (event) {
  removeActive();
  event.currentTarget.classList.add('pin--active');
  showElement(dialogWindow);
};

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY;
};

var keyTogglePin = function (event) {
  // если мы на жали на кнопку и этой кнопкой был ENTER, то...
  if (isActivateEvent(event)) {
    togglePin(event); // мы у каждого пина проверяем наличие класса pin--active и если он есть, удаляем и присваиваем активный класс текущему пину
  }
};

// создадим цикл который проверяет наличие у .pin еще одного класса .pin--active
// если класс есть, удаляем его
for (var i = 0; i < pin.length; i++) {
  pin[i].addEventListener('click', togglePin);

  pin[i].addEventListener('keydown', keyTogglePin);
}

// обработчик события закрытия окна и удаления активного класса у элемента по клику на крестик
dialogClose.addEventListener('click', function () {
  closeDialog();
});

// обработчик события по нажатию на клавишу

dialogClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    closeDialog();
  }
  dialogWindow.setAttribute('aria-hidden', false);
});

// делегирую обработку события клика по пину на карту с пинами
pinMap.addEventListener('click', togglePin);
pinMap.addEventListener('keydown', keyTogglePin(event));

// валидация форм
noticeTitle.required = REQUIRED_FIELD;
noticeTitle.minLength = TITLE_MIN_LENGTH;
noticeTitle.maxLength = TITLE_MAX_LENGTH;

noticePrice.required = REQUIRED_FIELD;
noticePrice.type = PRICE_TYPE;
noticePrice.min = PRICE_MIN;
noticePrice.max = PRICE_MAX;

noticeAddress.required = REQUIRED_FIELD;

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
