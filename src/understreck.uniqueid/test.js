"use strict"

var test = require('ava')
var uniqueId = require('./')

test('exists', t => {
    t.is(typeof uniqueId, 'function')
    
})

test('return a higher number each call', t => {
    var first = uniqueId()
    t.is(typeof first, 'number')
    t.is(first, 1)
    t.is(uniqueId(), 2)
    t.is(uniqueId(), 3)
    t.is(uniqueId(), 4)
    
})
