import test from 'ava'
import isNull from '.'

test('return a boolean', t => {
  t.is(isNull(null), true)
  t.is(isNull(), false)
  t.is(isNull(undefined), false)
  t.is(isNull(void 0), false)
  t.is(isNull(123), false)
  t.is(isNull("abc"), false)
})
