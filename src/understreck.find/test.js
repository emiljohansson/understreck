import test from 'ava'
import sinon from 'sinon'
import find from '.'

test('do nothing', t => {
  const callback = sinon.spy()
  find(callback)
  t.false(callback.called)
})

test('return first match', t => {
  var users = [{
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
  var result = find(users, function(chr) {
    return chr.age < 40
  })

  t.is(result, users[0])

  result = find(users, function(chr) {
    return chr.age < 30
  })

  t.is(result, users[2])
})
