import test from 'ava'
import startCase from '../src/startCase'

test('falsy', t => {
  t.is(startCase(''), '')
  t.is(startCase(), '')
  t.is(startCase(null), '')
  t.is(startCase('       '), '')
})

test('upper case first character', t => {
  t.is(startCase('--foo-bar--'), 'Foo Bar')
  t.is(startCase('fooBar'), 'Foo Bar')
  t.is(startCase('__FOO_BAR__'), 'FOO BAR')
  t.is(startCase('FooBar'), 'Foo Bar')
  t.is(startCase('FooBar'), 'Foo Bar')
  t.is(startCase('     b'), 'B')
  t.is(startCase('b     '), 'B')
  t.is(startCase(123), '123')
  t.is(startCase(-0), '0')
  t.is(startCase(false), 'False')
  t.is(startCase(true), 'True')
})
