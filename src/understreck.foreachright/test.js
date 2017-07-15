import test from 'ava'
import sinon from 'sinon'
import forEachRight from '.'

test('do nothing', t => {
  const callback = sinon.spy()
  forEachRight()
  t.false(callback.called)
  forEachRight(123, "abc")
  t.false(callback.called)
  forEachRight(callback)
  t.false(callback.called)
  forEachRight([1, 2, 3], null)
  t.false(callback.called)
})

test('call callback each iteration', t => {
  let callback = sinon.spy()
  forEachRight([1, 2, 3], callback)
  t.is(callback.callCount, 3)
  callback = sinon.spy()
  forEachRight([1, 2, 3, 4], callback)
  t.is(callback.callCount, 4)
})

test('pass item each iteration', t => {
  var result = []

  function iteratee(value) {
    result.push(value)
  }
  forEachRight([1, 2, 3], iteratee)
  t.deepEqual(result, [3, 2, 1])
})

test('pass key each iteration', t => {
  var result = []

  function iteratee(value, key) {
    result.push(key)
  }
  forEachRight([1, 2, 3], iteratee)
  t.deepEqual(result, [2, 1, 0])
})
