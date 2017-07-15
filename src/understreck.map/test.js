"use strict";

var test = require('ava');
var sinon = require('sinon');
var map = require('./');

test('exists', function(t) {
    t.is(typeof map, 'function');
    
});

test('returns an array', function(t) {
    t.is(Array.isArray(map()), true);
    
});

test('call callback each iteration', function(t) {
    var callback = sinon.spy();
    map([1, 2, 3], callback);
    t.is(callback.callCount, 3);
    callback = sinon.spy();
    map([1, 2, 3, 4], callback);
    t.is(callback.callCount, 4);
    
});

test('modify each item', function(t) {
    function timesByThree(value) {
        return value * 3;
    }
    var result = map([1, 2, 3], timesByThree);
    t.deepEqual(result, [3, 6, 9]);
    
});
