import test from 'ava'
import some from '.'

test('return a boolean', t => {
  t.is(some(), false)
  t.is(some(null, Boolean), false)
  t.is(some([], null), false)
})

test('arrays - compare all objects', t => {
  function isBoolean(v) {
    return typeof v === 'boolean'
  }
  t.is(some([undefined, 1, null, 'yes'], isBoolean), false)
  t.is(some([null, 0, 'yes', false], isBoolean), true)
})
