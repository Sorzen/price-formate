'use strict';

function priceTrans(value) {
  var fixedPrice = void 0;
  var finalPrice = void 0;
  var actualPrice = Number(value) * 1000 / 1000;
  var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
  if (isNaN(value)) {
    finalPrice = '--';
  }
  if (actualPrice.toString().indexOf('.') !== -1) {
    if (actualPrice !== 0 && actualPrice.toString().split('.')[1].length > 2) {
      fixedPrice = parseFloat(actualPrice).toFixed(3);
      finalPrice = fixedPrice.replace(re, '$1,');
    } else {
      fixedPrice = parseFloat(actualPrice).toFixed(2);
      finalPrice = fixedPrice.replace(re, '$1,');
    }
  } else {
    fixedPrice = parseFloat(actualPrice).toFixed(2);
    finalPrice = fixedPrice.replace(re, '$1,');
  }
  return finalPrice;
};

module.exports = priceTrans;