import test from 'ava'
import sinon from 'sinon'
import map from '.'
import isArray from '../isarray'

test('returns an array', t => {
  t.is(isArray(map()), true)
})

test('call callback each iteration', t => {
  let callback = sinon.spy()
  map([1, 2, 3], callback)
  t.is(callback.callCount, 3)
  callback = sinon.spy()
  map([1, 2, 3, 4], callback)
  t.is(callback.callCount, 4)
})

test('modify each item', t => {
  const timesByThree = value => value * 3
  const result = map([1, 2, 3], timesByThree)
  t.deepEqual(result, [3, 6, 9])
})
