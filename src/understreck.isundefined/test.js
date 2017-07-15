import test from 'ava'
import isUndefined from '.'

test('return a boolean', t => {
  t.is(isUndefined(), true)
  t.is(isUndefined(undefined), true)
  t.is(isUndefined(void 0), true)
  t.is(isUndefined(null), false)
  t.is(isUndefined(123), false)
  t.is(isUndefined('abc'), false)
})
