"use strict";

var test = require('ava');
var pluck = require('./');

test('exists', function(t) {
    t.is(typeof pluck, 'function');
    
});

test('return an array', function(t) {
    t.deepEqual(pluck(), []);
    t.deepEqual(pluck([{b:444}, {a:123}]), []);
    t.deepEqual(pluck(null, "name"), []);
    
});

test('return values based on key', function(t) {
    var users = [{
        'user': 'barney',
        'age': 36
    }, {
        'user': 'fred',
        'age': 40
    }];

    t.deepEqual(pluck(users, 'user'), ['barney', 'fred']);
    
});
