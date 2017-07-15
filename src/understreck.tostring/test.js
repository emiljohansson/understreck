import test from 'ava'
import toString from '../understreck.tostring'

const typeString = '[object String]'
const typeFunction = '[object Function]'
const typeNumber = '[object Number]'
const typeBoolean = '[object Boolean]'

test(t => {
  t.is(toString(new String()), typeString)  // eslint-disable-line no-new-wrappers
  t.is(toString(''), typeString)
  t.is(toString(new Function()), typeFunction)  // eslint-disable-line no-new-func
  t.is(toString(() => {}), typeFunction)
  t.is(toString(class {}), typeFunction)
  t.is(toString(new Number()), typeNumber)  // eslint-disable-line no-new-wrappers
  t.is(toString(0), typeNumber)
  t.is(toString(new Boolean()), typeBoolean)  // eslint-disable-line no-new-wrappers
  t.is(toString(false), typeBoolean)
})
