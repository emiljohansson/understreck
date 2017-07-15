"use strict";

var test = require('ava');
var isArray = require('./');

test('exists', function(t) {
    t.is(typeof isArray, 'function');
    
});

test('return false', function(t) {
    t.false(isArray());
    t.false(isArray(null));
    t.false(isArray(123));
    t.false(isArray("abc"));
    
});

test('return true', function(t) {
    t.true(isArray([]));
    
});
