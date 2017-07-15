import test from 'ava'
const isString = require('./')

test('not return false', t => {
  t.false(isString())
  t.false(isString(function() {}))
  t.false(isString(123))
  t.false(isString(null))
  t.false(isString(undefined))
  t.false(isString(NaN))
})

test('not return true', t => {
  t.true(isString(""))
  t.true(isString("123"))
  t.true(isString("null"))
  t.true(isString("undefined"))
  t.true(isString("NaN"))
})
