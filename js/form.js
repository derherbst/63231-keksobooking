'use strict';

// var pin = document.querySelectorAll('.pin');
var pinMapElem = document.querySelector('.tokyo__pin-map');
var dialogWindowElem = document.querySelector('.dialog');
var dialogCloseElem = document.querySelector('.dialog__close');

window.initializePins(pinMapElem, dialogWindowElem, dialogCloseElem);

var noticeForm = document.querySelector('.notice__form');
var noticeTitle = noticeForm.querySelector('#title');
var noticeAddress = noticeForm.querySelector('#address');
var checkIn = document.querySelector('#time');
var checkOut = document.querySelector('#timeout');

window.synchronizeFields(checkIn, checkOut, [], [], 'value');

var noticePrice = noticeForm.querySelector('#price');
var appsType = document.querySelector('#type');

window.synchronizeFields(appsType, noticePrice, ['1000', '0', '1000000'], ['Квартира', 'Лачуга', 'Дворец'], 'value');

var numberOfRooms = document.querySelector('#room_number');
var numberOfGuests = document.querySelector('#capacity');

window.synchronizeFields(numberOfRooms, numberOfGuests, ['1', '2', '100'], ['0', '3'], 'value');
window.synchronizeFields(numberOfGuests, numberOfRooms, ['0', '3'], ['1', '2', '100'], 'value');

// валидация форм
noticeTitle.required = 'true';
noticeTitle.minLength = 30;
noticeTitle.maxLength = 100;

noticePrice.required = true;
noticePrice.type = 'number';
noticePrice.min = 1000;
noticePrice.max = 1000000;

noticeAddress.required = true;
