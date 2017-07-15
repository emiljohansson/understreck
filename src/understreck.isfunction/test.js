

const test = require('ava')
const isFunction = require('./')

test('exists', t => {
    t.is(typeof isFunction, 'function')
    
})

test('return false', t => {
    t.false(isFunction())
    
})

test('return true', t => {
    t.true(isFunction(function() {}))
    
})
