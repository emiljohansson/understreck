import test from 'ava'
import isFunction from '.'

test('return false', t => {
  t.false(isFunction())
})

test('return true', t => {
  t.true(isFunction(function () {}))
})
