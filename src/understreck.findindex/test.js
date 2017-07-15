

import test from 'ava'
const sinon = require('sinon')
const findIndex = require('./')

test('exists', t => {
    t.is(typeof findIndex, 'function')
    
})

test('do nothing', t => {
    var callback = sinon.spy()
    findIndex(callback)
    t.false(callback.called)
    
})

test('return first match', t => {
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
    }]
    var result = findIndex(users, function(chr) {
        return chr.age < 40
    })

    t.is(result, 0)

    result = findIndex(users, function(chr) {
        return chr.age < 30
    })

    t.is(result, 2)
    
})
