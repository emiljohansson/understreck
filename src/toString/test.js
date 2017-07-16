import test from 'ava'
import toString from '../toString'

test('objects', t => {
  t.is(toString(''), '')
  t.is(toString('abc'), 'abc')
  t.is(toString(123), '123')
  t.is(toString([1, 2, 3]), '1,2,3')
})

test('falsy', t => {
  t.is(toString(), '')
  t.is(toString(null), '')
  t.is(toString(''), '')
})

test('boolean', t => {
  t.is(toString(false), 'false')
  t.is(toString(true), 'true')
})

test('numbers', t => {
  t.is(toString(0), '0')
  t.is(toString(-123), '-123')
  t.is(toString(-0), '-0')
})
