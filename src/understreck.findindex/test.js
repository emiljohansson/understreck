"use strict";

var test = require('ava');
var sinon = require('sinon');
var findIndex = require('./');

test('exists', function(t) {
    t.is(typeof findIndex, 'function');
    
});

test('do nothing', function(t) {
    var callback = sinon.spy();
    findIndex(callback);
    t.false(callback.called);
    
});

test('return first match', function(t) {
    var users = [{
        'user': 'barney',
        'age': 36,
        'active': true
    }, {
        'user': 'fred',
        'age': 40,
        'active': false
    }, {
        'user': 'pebbles',
        'age': 1,
        'active': true
    }];
    var result = findIndex(users, function(chr) {
        return chr.age < 40;
    });

    t.is(result, 0);

    result = findIndex(users, function(chr) {
        return chr.age < 30;
    });

    t.is(result, 2);
    
});
