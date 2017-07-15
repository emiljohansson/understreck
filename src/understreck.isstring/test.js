"use strict";

var test = require('ava');
var isString = require('./');

test('exists', function(t) {
    t.is(typeof isString, 'function');
    
});

test('not return false', function(t) {
    t.false(isString());
    t.false(isString(function() {}));
    t.false(isString(123));
    t.false(isString(null));
    t.false(isString(undefined));
    t.false(isString(NaN));
    
});

test('not return true', function(t) {
    t.true(isString(""));
    t.true(isString("123"));
    t.true(isString("null"));
    t.true(isString("undefined"));
    t.true(isString("NaN"));
    
});
