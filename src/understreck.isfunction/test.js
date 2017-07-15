"use strict";

var test = require('ava');
var isFunction = require('./');

test('exists', function(t) {
    t.is(typeof isFunction, 'function');
    
});

test('return false', function(t) {
    t.false(isFunction());
    
});

test('return true', function(t) {
    t.true(isFunction(function() {}));
    
});
