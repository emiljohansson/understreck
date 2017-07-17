import test from 'ava'
import capitalize from '../src/capitalize'

test('upper case first character', t => {
  t.is(capitalize('john'), 'John')
  t.is(capitalize('john smith'), 'John smith')
  t.is(capitalize('JOHN'), 'John')
})

test('preserve original string', t => {
  let name = 'john'
  capitalize('john')
  t.is(name, 'john')
})

test('falsy', t => {
  t.is(capitalize(''), '')
  t.is(capitalize(), '')
  t.is(capitalize(null), '')
})

test('numbers', t => {
  t.is(capitalize(123), '123')
  t.is(capitalize(-0), '-0')
})

test('objects', t => {
  t.is(capitalize({}), '[object object]')
  t.is(capitalize([]), '')
})
