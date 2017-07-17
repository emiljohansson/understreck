import test from 'ava'
import isString from '../src/isString'

test('false', t => {
  t.false(isString())
  t.false(isString(() => {}))
  t.false(isString(123))
  t.false(isString(null))
  t.false(isString(undefined))
  t.false(isString(NaN))
})

test('true', t => {
  t.true(isString(''))
  t.true(isString('123'))
  t.true(isString('null'))
  t.true(isString('undefined'))
  t.true(isString('NaN'))
  t.true(isString(new String())) // eslint-disable-line no-new-wrappers
  t.true(isString(new String('Hello'))) // eslint-disable-line no-new-wrappers
})
