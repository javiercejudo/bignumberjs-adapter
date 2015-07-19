/*jshint node:true */

'use strict';

var identity = require('lodash.identity');
var bignumber = require('bignumber.js');

module.exports = {
  getInstance: bignumber.another,
  getPrecision: getPrecision,
  setPrecision: setPrecision,
  plus: plus,
  minus: minus,
  times: times,
  div: div,
  pow: pow,
  toString: toString,
  valueOf: toString,
  parseInput: identity
};

function getPrecision(Bignumber) {
  return Bignumber.config().DECIMAL_PLACES;
}

function setPrecision(Bignumber, n) {
  Bignumber.config(n);
}

function plus(x, y) {
  return x.plus(y);
}

function minus(x, y) {
  return x.minus(y);
}

function times(x, y) {
  return x.times(y);
}

function div(x, y) {
  return x.div(y);
}

function pow(x, y) {
  return x.pow(y);
}

function toString(x) {
  return x.toString();
}
