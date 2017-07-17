import test from 'ava'
import isNumber from '../src/isNumber'

test('false', t => {
  t.false(isNumber())
  t.false(isNumber(() => {}))
  t.false(isNumber('4'))
  t.false(isNumber(null))
  t.false(isNumber(undefined))
})

test('true', t => {
  t.true(isNumber(4))
  t.true(isNumber(Number.MIN_VALUE))
  t.true(isNumber(Infinity))
  t.true(isNumber(NaN))
})
