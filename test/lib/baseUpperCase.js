import test from 'ava'
import baseUpperCase from '../../src/lib/baseUpperCase'

test('valid', t => {
  t.is(baseUpperCase('abc'), 'ABC')
  t.is(baseUpperCase('  abc  def  '), '  ABC  DEF  ')
})

test('invalid', t => {
  const list = [undefined, null, 123, false]
  t.plan(list.length * 2)
  list.forEach(item => {
    const error = t.throws(() => {
      baseUpperCase(item)
    })
    t.is(typeof error.message, 'string')
  })
})
