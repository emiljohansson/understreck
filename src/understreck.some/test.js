"use strict";

var test = require('ava');
var some = require('./');

test('exists', function(t) {
    t.is(typeof some, 'function');

});

test('return a boolean', function(t) {
    t.is(some(), false);
    t.is(some(null, Boolean), false);
    t.is(some([], null), false);

});

test('arrays - compare all objects', function(t) {
    function isBoolean(v) {
        return typeof v === 'boolean';
    }
    t.is(some([undefined, 1, null, 'yes'], isBoolean), false);
    t.is(some([null, 0, 'yes', false], isBoolean), true);

});
