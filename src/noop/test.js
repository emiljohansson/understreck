import test from 'ava'
import noop from '.'

test(t => {
  t.is(noop(), undefined)
})
