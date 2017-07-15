import isArray from '../understreck.isarray'
import isFunction from '../understreck.isfunction'

function forEach (collection, iteratee) {
  if (!isArray(collection) || !isFunction(iteratee)) {
    return
  }
  var index = -1
  var length = collection.length
  while (++index < length) {
    iteratee(collection[index], index)
  }
}

export default forEach
