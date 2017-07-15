"use strict";

var test = require('ava');
var reduce = require('./');

function add(a, b) {
    return a + b;
}

test('exists', t => {
    t.is(typeof reduce, 'function');

});

test('do nothing', t => {
    t.is(reduce(), undefined);

});

test('arrays - return first value', t => {
    t.is(reduce([2, 3, 4]), 2);

});

test('arrays - sum the numbers', t => {
    function sum(result, value) {
        return add(result, value);
    }
    t.is(reduce([1, 2, 3], sum), 6);
    t.is(reduce([1, 2, 4], sum), 7);

});

test('objects - return first value', t => {
    t.is(reduce({ 'a': 5, 'b': 2 }), 5);

});

test('objects - modify each number', t => {
    t.deepEqual(reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
        result[key] = n * 3;
        return result;
    }, {}), { 'a': 3, 'b': 6 });

});
