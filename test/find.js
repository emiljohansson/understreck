import test from 'ava'
import sinon from 'sinon'
import find from '../src/find'

test('do nothing', t => {
  const callback = sinon.spy()
  find(callback)
  t.false(callback.called)
})

test('return first match', t => {
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
  let actual = find(users, user => user.age < 40)
  t.is(actual, users[0])
  actual = find(users, user => user.age < 30)
  t.is(actual, users[2])
})
