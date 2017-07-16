import test from 'ava'
import filter from '.'
import noop from '../noop'

test('do nothing', t => {
  t.is(filter(noop).length, 0)
  t.is(filter([], noop).length, 0)
  t.is(filter([]).length, 0)
})

test('return filtered list of users', t => {
  const users = [{
    'user': 'barney',
    'age': 36,
    'active': true
  }, {
    'user': 'fred',
    'age': 40,
    'active': false
  }, {
    'user': 'pebbles',
    'age': 1,
    'active': true
  }]
  let actual = filter(users, user => user.age < 40)
  t.deepEqual(actual, [users[0], users[2]])
  actual = filter(users, user => user.age < 30)
  t.deepEqual(actual, [users[2]])
})
