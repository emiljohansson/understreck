import isArray from '../understreck.isarray'
import isFunction from '../understreck.isfunction'

function forEach(collection, iteratee) {
  if (!isArray(collection) || !isFunction(iteratee)) {
    return
  }
  var index = collection.length
  while (index--) {
    iteratee(collection[index], index)
  }
}

export default forEach
