"use strict";

var test = require('ava');
var includes = require('./');

test('exists', function(t) {
    t.is(typeof includes, 'function');

});

test('do nothing', function(t) {
    t.false(includes());
    t.false(includes(null));
    t.false(includes(null, 123));
    t.false(includes(123, null));

});

test('arrays - not find simple check for number', function(t) {
    t.false(includes([1, 2, 3], 1.5));
    t.false(includes([1, 2, 3], 4));
    t.false(includes([1, 2, 3], 0));

});

test('arrays - find simple check for number', function(t) {
    t.true(includes([1, 2, 3], 1));
    t.true(includes([1, 2, 3], 2));
    t.true(includes([1, 2, 3], 3));

});

test('arrays - not find from index', function(t) {
    t.false(includes([1, 2, 3], 1, 1));
    t.false(includes([1, 2, 3], 2, 2));
    t.false(includes([1, 2, 3], 3, 3));

});

test('arrays - find from index', function(t) {
    t.true(includes([1, 2, 3], 2, 1));
    t.true(includes([1, 2, 3], 3, 1));
    t.true(includes([1, 2, 3], 3, -5));

});

test('objects - find by value', function(t) {
    t.true(includes({ 'user': 'fred', 'age': 40 }, 'fred'));
    t.true(includes({ 'user': 'fred', 'age': 40 }, 40));

});

test('strings - find characters', function(t) {
    t.true(includes('pebbles', 'eb'));
    t.false(includes('pebbles', 'eq'));

});
