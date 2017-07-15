import test from 'ava'
import isBoolean from '../understreck.isboolean'

test('true', t => {
  t.true(isBoolean(true))
  t.true(isBoolean(false))
  t.true(isBoolean(new Boolean()))
  t.true(isBoolean(new Boolean(false)))
  t.true(isBoolean(new Boolean(true)))
})

test('false', t => {
  t.false(isBoolean())
  t.false(isBoolean(null))
  t.false(isBoolean(''))
  t.false(isBoolean(0))
  t.false(isBoolean(1))
})
