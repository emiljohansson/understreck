"use strict";

var test = require('ava');
var isNull = require('./');

test('exists', function(t) {
    t.is(typeof isNull, 'function');
    
});

test('return a boolean', function(t) {
    t.is(isNull(null), true);
    t.is(isNull(), false);
    t.is(isNull(undefined), false);
    t.is(isNull(void 0), false);
    t.is(isNull(123), false);
    t.is(isNull("abc"), false);
    
});
