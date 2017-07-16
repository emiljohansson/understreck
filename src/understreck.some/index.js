import isArray from '../understreck.isarray'
import isFunction from '../understreck.isfunction'

function some (collection, predicate) { //, thisArg
  const length = collection ? collection.length : 0
  if (isArray(collection) && isFunction(predicate)) {
    let index = -1
    while (++index < length) {
      if (predicate(collection[index])) {
        return true
      }
    }
  }
  return false
}

export default some
