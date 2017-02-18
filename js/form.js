'use strict';

var pin = document.querySelectorAll('.pin');
var dialogWindow = document.querySelector('.dialog');
var dialogCross = document.querySelector('.dialog__close');
var numberOfRooms = document.querySelector('#room_number');
var numberOfGuests = document.querySelector('#capacity');
var noticeForm = document.querySelector('.notice__form');
var noticeTitle = noticeForm.querySelector('#title');
var noticePrice = noticeForm.querySelector('#price');
var noticeAddress = noticeForm.querySelector('#address');

// удаляем активные классы у меток
var removeActive = function () {
  for (var j = 0; j < pin.length; j++) {
    pin[j].classList.remove('pin--active');
  }
};

var closeDialog = function () {
  dialogWindow.style.display = 'none';
  removeActive();
};

// обработчик события по клику на пин
var togglePin = function (event) {
  removeActive();
  event.target.classList.add('pin--active');
  dialogWindow.style.display = 'block';
};

// создадим цикл который проверяет наличие у .pin еще одного класса .pin--active
// если класс есть, удаляем его
for (var i = 0; i < pin.length; i++) {
  pin[i].addEventListener('click', togglePin);
}

// обработчик события закрытия окна и удаления активного класса у элемента по клику на крестик
dialogCross.addEventListener('click', function () {
  closeDialog();
  removeActive();
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
