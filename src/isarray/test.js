import test from 'ava'
import isArray from '.'

test('return false', t => {
  t.false(isArray())
  t.false(isArray(null))
  t.false(isArray(123))
  t.false(isArray('abc'))
})

test('return true', t => {
  t.true(isArray([]))
})
