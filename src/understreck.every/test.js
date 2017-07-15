"use strict";

var test = require('ava');
var every = require('./');

test('exists', t => {
    t.is(typeof every, 'function');

});

test('return a boolean', t => {
    t.is(every(), false);
    t.is(every(null, Boolean), false);
    t.is(every([], null), false);

});

test('arrays - compare all objects', t => {
  function isBoolean(v) {
      return typeof v === 'boolean';
  }
  t.is(every([true, 1, null, 'yes'], isBoolean), false);
  t.is(every([true, false, true], isBoolean), true);
});
