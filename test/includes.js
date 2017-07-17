import test from 'ava'
import includes from '../src/includes'

test('do nothing', t => {
  t.false(includes())
  t.false(includes(null))
  t.false(includes(null, 123))
  t.false(includes(123, null))
})

test('arrays - not find simple check for number', t => {
  t.false(includes([1, 2, 3], 1.5))
  t.false(includes([1, 2, 3], 4))
  t.false(includes([1, 2, 3], 0))
})

test('arrays - find simple check for number', t => {
  t.true(includes([1, 2, 3], 1))
  t.true(includes([1, 2, 3], 2))
  t.true(includes([1, 2, 3], 3))
})

test('arrays - not find from index', t => {
  t.false(includes([1, 2, 3], 1, 1))
  t.false(includes([1, 2, 3], 2, 2))
  t.false(includes([1, 2, 3], 3, 3))
})

test('arrays - find from index', t => {
  t.true(includes([1, 2, 3], 2, 1))
  t.true(includes([1, 2, 3], 3, 1))
  t.true(includes([1, 2, 3], 3, -5))
})

test('objects - find by value', t => {
  t.true(includes({ 'user': 'fred', 'age': 40 }, 'fred'))
  t.true(includes({ 'user': 'fred', 'age': 40 }, 40))
})

test('strings - find characters', t => {
  t.true(includes('pebbles', 'eb'))
  t.false(includes('pebbles', 'eq'))
})
