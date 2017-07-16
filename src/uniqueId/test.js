import test from 'ava'
import uniqueId from '../uniqueId'

test('return a higher number each call', t => {
  const first = uniqueId()
  t.is(typeof first, 'number')
  t.is(first, 1)
  t.is(uniqueId(), 2)
  t.is(uniqueId(), 3)
  t.is(uniqueId(), 4)
})
