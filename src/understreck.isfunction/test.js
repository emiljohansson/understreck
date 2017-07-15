import test from 'ava'
const isFunction = require('./')

test('return false', t => {
  t.false(isFunction())
})

test('return true', t => {
  t.true(isFunction(function() {}))
})
