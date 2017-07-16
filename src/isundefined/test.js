import test from 'ava'
import isUndefined from '../isundefined'

test('false', t => {
  t.false(isUndefined(null))
  t.false(isUndefined(123))
  t.false(isUndefined('abc'))
})

test('return a boolean', t => {
  t.true(isUndefined())
  t.true(isUndefined(undefined))
  t.true(isUndefined(void 0))
})
