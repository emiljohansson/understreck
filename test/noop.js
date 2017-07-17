import test from 'ava'
import noop from '../src/noop'

test(t => {
  t.is(noop(), undefined)
})
