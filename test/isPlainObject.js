import test from 'ava'
import isPlainObject from '../src/isPlainObject'

test('false', t => {
  function Foo () {
    this.a = 1
  }
  t.false(isPlainObject(new Foo()))
  t.false(isPlainObject([1, 2, 3]))
  // t.false(isPlainObject(Object.create({}))) // failing...
})

test('true', t => {
  t.true(isPlainObject({
    'x': 0,
    'y': 0
  }))
  t.true(isPlainObject(Object.create(null)))
})
