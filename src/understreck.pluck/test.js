import test from 'ava'
var pluck = require('./')

test('return an array', t => {
  t.deepEqual(pluck(), [])
  t.deepEqual(pluck([{
    b: 444
  }, {
    a: 123
  }]), [])
  t.deepEqual(pluck(null, "name"), [])
})

test('return values based on key', t => {
  var users = [{
    'user': 'barney',
    'age': 36
  }, {
    'user': 'fred',
    'age': 40
  }]

  t.deepEqual(pluck(users, 'user'), ['barney', 'fred'])
})
