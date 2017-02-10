'use strict';

var pin = document.querySelectorAll('.tokyo__pin-map .pin');
var pinActive = document.querySelectorAll('.tokyo__pin-map div.pin--active');
var dialogWindow = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');


// создадим цикл который проверяет наличие у .pin еще одного класса .pin--active
// если класс есть, удаляем его

function togglePin() {

  for (var i = 0; i < pin.length; i++) {
    pinActive[i].classList.remove('pin--active');
  }

  if (dialogWindow) {
    dialogWindow.style.display = 'block';
  }

  dialogClose.addEventListener('click', function () {

    dialogWindow.style.display = 'none';

  });

}

togglePin();
// pin.addEventListener('click', function () {
//
//  pinActive.classList.remove('pin--active');
//
//
// });

// pin.addEventListener('click', function () {
//
//  dialogWindow.style.display = 'block';
//
// });

// dialogClose.addEventListener('click', function () {
//
//  dialogWindow.style.display = 'none';
//
// });
