'use strict';

window.synchronizeFields = function (firstField, secondField, firstValuesArr, secondValuesArr, property) {

  firstField.addEventListener('change', function () {
    secondField.property = firstField.property;
  });

  secondField.addEventListener('change', function () {
    firstField.property = secondField.property;
  });

  // тип жилья

  firstField.addEventListener('change', function () {
    if (firstField.property === firstValuesArr[0]) {
      secondField.value = 1000;
      secondField.min = 1000;
    } else if (firstField.property === firstValuesArr[1]) {
      secondField.property = 0;
      secondField.min = 0;
    } else {
      secondField.property = 1000000;
      secondField.min = 1000000;
    }
  });

  // количество комнат
  firstField.addEventListener('change', function () {
    if (firstField === firstValuesArr[1] || firstField === firstValuesArr[2]) {
      secondField.property = secondValuesArr[0];
    } else {
      secondField.property = secondValuesArr[1];
    }
  });

  secondField.addEventListener('change', function () {
//    var indexSelectValue = firstValuesArr.indexOf(firstField.value);
    if (secondField === secondValuesArr[0]) {
      firstField.property = firstValuesArr[1];
    } else {
      firstField.property = firstValuesArr[0];
    }
  });

};
