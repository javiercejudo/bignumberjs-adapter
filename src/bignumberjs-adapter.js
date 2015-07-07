/*jshint node:true */

'use strict';

var bignumber = require('bignumber.js');

module.exports = {
  getInstance: bignumber.another,
  getPrecision: getPrecision,
  setPrecision: setPrecision,
  plus: plus,
  minus: minus,
  times: times,
  div: div,
  toString: toString,
  valueOf: toString,
  toJSON: toString
};

function getPrecision(Bignumber) {
  return Bignumber.config().DECIMAL_PLACES;
}

function setPrecision(Bignumber, n) {
  Bignumber.config(n);
}

function plus(bignumber, x) {
  return bignumber.plus(x);
}

function minus(bignumber, x) {
  return bignumber.minus(x);
}

function times(bignumber, x) {
  return bignumber.times(x);
}

function div(bignumber, x) {
  return bignumber.div(x);
}

function toString(bignumber) {
  return bignumber.toString();
}
