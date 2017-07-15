"use strict";

var test = require('ava');
var sinon = require('sinon');
var forEach = require('./');

test('exists', t => {
    t.is(typeof forEach, 'function');
    
});

test('do nothing', t => {
    var callback = sinon.spy();
    forEach();
    t.false(callback.called);
    forEach(123, "abc");
    t.false(callback.called);
    forEach(callback);
    t.false(callback.called);
    forEach([1, 2, 3], null);
    t.false(callback.called);
    
});

test('call callback each iteration', t => {
    var callback = sinon.spy();
    forEach([1, 2, 3], callback);
    t.is(callback.callCount, 3);
    callback = sinon.spy();
    forEach([1, 2, 3, 4], callback);
    t.is(callback.callCount, 4);
    
});

test('pass item each iteration', t => {
    var result = [];
    function iteratee(value) {
        result.push(value);
    }
    forEach([1, 2, 3], iteratee);
    t.deepEqual(result, [1, 2, 3]);
    
});

test('pass key each iteration', t => {
    var result = [];
    function iteratee(value, key) {
        result.push(key);
    }
    forEach([1, 2, 3], iteratee);
    t.deepEqual(result, [0, 1, 2]);
    
});
