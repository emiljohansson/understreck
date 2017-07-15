const test = require('ava')
const chunk = require('.')

test('return an array', t => {
  t.is(Array.isArray(chunk()), true)
  t.is(Array.isArray(chunk([])), true)
  t.is(Array.isArray(chunk(null)), true)
  t.is(Array.isArray(chunk(123)), true)
})

test('return an same array if no size', t => {
  t.deepEqual(chunk([]), [])
  t.deepEqual(chunk([1]), [1])
  t.deepEqual(chunk([1, 2, 3, 4]), [1, 2, 3, 4])
})

test('split up array based on size', t => {
  t.deepEqual(chunk([], 2), [])
  t.deepEqual(chunk([1], 2), [1])
  t.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]])
  t.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]])
  t.deepEqual(chunk([1, 2, 3, 4], 1), [[1], [2], [3], [4]])
  t.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
  t.deepEqual(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']])
})
