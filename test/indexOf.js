import test from 'ava'
import indexOf from '../src/indexOf'

test('do nothing', t => {
  t.false(indexOf())
  t.false(indexOf(null))
  t.false(indexOf(null, 123))
  t.false(indexOf(123, null))
})

test('arrays - not find simple check for number', t => {
  t.false(indexOf([1, 2, 3], 1.5))
  t.false(indexOf([1, 2, 3], 4))
  t.false(indexOf([1, 2, 3], 0))
})

test('arrays - find simple check for number', t => {
  t.true(indexOf([1, 2, 3], 1))
  t.true(indexOf([1, 2, 3], 2))
  t.true(indexOf([1, 2, 3], 3))
})

test('arrays - not find from index', t => {
  t.false(indexOf([1, 2, 3], 1, 1))
  t.false(indexOf([1, 2, 3], 2, 2))
  t.false(indexOf([1, 2, 3], 3, 3))
})

test('arrays - find from index', t => {
  t.true(indexOf([1, 2, 3], 2, 1))
  t.true(indexOf([1, 2, 3], 3, 1))
  t.true(indexOf([1, 2, 3], 3, -5))
})
