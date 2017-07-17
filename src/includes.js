import forEach from './forEach'
import indexOf from './indexOf'
import isArray from './isArray'
import isString from './isString'
import keys from './keys'

function includes (collection, target, fromIndex) {
  if (isArray(collection)) {
    return indexOf(collection, target, fromIndex)
  }
  if (isString(collection)) {
    return inString(collection, target)
  }
  if (typeof collection === 'object') {
    return inObject(collection, target)
  }
  return false
}

function inObject (collection, target) {
  let result = false
  forEach(keys(collection), key => {
    if (collection[key] === target) {
      result = true
    }
  })
  return result
}

function inString (collection, target, fromIndex) {
  return collection.indexOf(target, fromIndex) >= 0
}

export default includes
