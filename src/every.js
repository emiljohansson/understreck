import isArray from './isArray'
import isFunction from './isFunction'

function every (collection, predicate) { //, thisArg
  if (isArray(collection) && isFunction(predicate)) {
    return everyArray(collection, predicate)
  }
  return false
}

function everyArray (collection, predicate) {
  let index = -1
  const length = collection.length
  while (++index < length) {
    if (!predicate(collection[index])) {
      return false
    }
  }
  return true
}

export default every
