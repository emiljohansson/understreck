import test from 'ava'
import getTag from '../../src/lib/getTag'

const typeString = '[object String]'
const typeFunction = '[object Function]'
const typeNumber = '[object Number]'
const typeBoolean = '[object Boolean]'

test(t => {
  t.is(getTag(new String()), typeString)  // eslint-disable-line no-new-wrappers
  t.is(getTag(''), typeString)
  t.is(getTag(new Function()), typeFunction)  // eslint-disable-line no-new-func
  t.is(getTag(() => {}), typeFunction)
  t.is(getTag(class {}), typeFunction)
  t.is(getTag(new Number()), typeNumber)  // eslint-disable-line no-new-wrappers
  t.is(getTag(0), typeNumber)
  t.is(getTag(new Boolean()), typeBoolean)  // eslint-disable-line no-new-wrappers
  t.is(getTag(false), typeBoolean)
})
