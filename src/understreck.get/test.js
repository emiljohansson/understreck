import test from 'ava'
import get from '.'

const object = { 'a': [{ 'b': { 'c': 3 } }] }

test('find by string', t => {
  t.is(get(object, 'a[0].b.c'), 3)
  t.is(get(object, 'a[0].b[0].c'), undefined)
  t.deepEqual(get(object, 'a[0].b', 'default'), { 'c': 3 })
})

test('find by array' ,t => {
  t.is(get(object, ['a', '0', 'b', 'c']), 3)
  t.is(get(object, ['a', '1', 'b', 'c']), undefined)
})

test('return default value', t => {
  t.is(get(object, 'a.b.c', 'default'), 'default')
  t.is(get(object, 'a[0].b.d', 'default'), 'default')
})
