import isArray from '../understreck.isarray'
import isFunction from '../understreck.isfunction'

function findIndex (collection, predicate) {
  if (!isArray(collection) || !isFunction(predicate)) {
    return
  }
  let index = -1
  const length = collection.length
  while (++index < length) {
    if (predicate(collection[index])) {
      return index
    }
  }
}

export default findIndex
