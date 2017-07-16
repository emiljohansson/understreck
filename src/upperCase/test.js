import test from 'ava'
import upperCase from '../upperCase'

test('falsy', t => {
  t.is(upperCase(''), '')
  t.is(upperCase(), '')
  t.is(upperCase(null), '')
  t.is(upperCase('       '), '')
})

test('upper case first character', t => {
  t.is(upperCase('--foo-bar--'), 'FOO BAR')
  t.is(upperCase('fooBar'), 'FOO BAR')
  t.is(upperCase('__FOO_BAR__'), 'FOO BAR')
  t.is(upperCase('FooBar'), 'FOO BAR')
  t.is(upperCase('FooBar'), 'FOO BAR')
  t.is(upperCase('     b'), 'B')
  t.is(upperCase('b     '), 'B')
  t.is(upperCase(123), '123')
  t.is(upperCase(-0), '0')
  t.is(upperCase(false), 'FALSE')
  t.is(upperCase(true), 'TRUE')
})
