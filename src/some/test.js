import test from 'ava'
import some from '.'
import isBoolean from '../isboolean'

test('return a boolean', t => {
  t.is(some(), false)
  t.is(some(null, Boolean), false)
  t.is(some([], null), false)
})

test('arrays - compare all objects', t => {
  t.is(some([undefined, 1, null, 'yes'], isBoolean), false)
  t.is(some([null, 0, 'yes', false], isBoolean), true)
})
