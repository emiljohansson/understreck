import test from 'ava'
import isBoolean from '../isboolean'

test('true', t => {
  t.true(isBoolean(true))
  t.true(isBoolean(false))
  t.true(isBoolean(new Boolean())) // eslint-disable-line no-new-wrappers
  t.true(isBoolean(new Boolean(false))) // eslint-disable-line no-new-wrappers
  t.true(isBoolean(new Boolean(true))) // eslint-disable-line no-new-wrappers
})

test('false', t => {
  t.false(isBoolean())
  t.false(isBoolean(null))
  t.false(isBoolean(''))
  t.false(isBoolean(0))
  t.false(isBoolean(1))
})
