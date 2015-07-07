# bignumberjs-adapter

[![Build Status](https://travis-ci.org/javiercejudo/bignumberjs-adapter.svg)](https://travis-ci.org/javiercejudo/bignumberjs-adapter)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/bignumberjs-adapter/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/bignumberjs-adapter?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/bignumberjs-adapter/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/bignumberjs-adapter)

[bignumber.js](https://github.com/MikeMcl/bignumber.js) adapter for
[linear-arbitrary-precision](https://github.com/javiercejudo/linear-arbitrary-precision)

## Install

    npm i bignumberjs-adapter

## Usage

### Factory and configuration

```js
var decimalFactory = require('linear-arbitrary-precision');
var adapter = require('bignumberjs-adapter');

var Decimal = decimalFactory(adapter);

Decimal.getPrecision(); // => 20

new Decimal(1).div(3).valueOf(); // => '0.33333333333333333333'

Decimal.setPrecision(5);

new Decimal(1).div(3).valueOf(); // => '0.33333'
```

### Operations

```js
new Decimal(0.1).plus(0.2).valueOf(); // => '0.3'

new Decimal(0.3).minus(0.1).valueOf(); // => '0.2'

new Decimal(0.6).times(3).valueOf(); // => '1.8'

new Decimal(0.3).div(0.2).valueOf(); // => '1.5'
```

### toString, valueOf and toJSON

```js
var decimalThird = new Decimal(1).div(new Decimal(3));

decimalThird.toString() === decimalThird.valueOf() === decimalThird.toJSON(); // => true

Number(decimalThird); // => 1/3
```

### JSON.stringify and JSON.parse with reviver

```js
var Decimal40 = decimalFactory(adapter);

Decimal40.setPrecision(40);

var decimalThird = new Decimal40(1).div(3);

var stringified = JSON.stringify([decimalThird]);
// => '["0.3333333333333333333333333333333333333333"]'

JSON.parse(stringified, Decimal40.JSONReviver)[0];
// => new Decimal40('0.3333333333333333333333333333333333333333')
```

See [spec](test/spec.js).
