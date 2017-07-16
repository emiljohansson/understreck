import test from 'ava'
import sinon from 'sinon'
import findIndex from '.'

test('do nothing', t => {
  const callback = sinon.spy()
  findIndex(callback)
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
  let result = findIndex(users, user => user.age < 40)
  t.is(result, 0)
  result = findIndex(users, user => user.age < 30)
  t.is(result, 2)
})
