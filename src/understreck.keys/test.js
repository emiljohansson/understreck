"use strict";

var test = require('ava');
var keys = require('./');

test('exists', t => {
    t.is(typeof keys, 'function');
    
});

test('return an array', t => {
    t.true(Array.isArray(keys()));
    t.true(Array.isArray(keys(null)));
    t.true(Array.isArray(keys(null, 123)));
    t.true(Array.isArray(keys(123, null)));
    
});

test('return keys of the object', t => {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }
    t.deepEqual(keys(new Foo()), ['a', 'b']);
    t.deepEqual(keys('hi'), ['0', '1']);
    t.deepEqual(keys({
        'user': 'fred',
        'age': 40
    }), ['user', 'age']);
    
});
