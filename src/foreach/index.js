import isArray from '../isarray'
import isFunction from '../isfunction'

function forEach (collection, iteratee) {
  if (!isArray(collection) || !isFunction(iteratee)) {
    return
  }
  let index = -1
  const length = collection.length
  while (++index < length) {
    iteratee(collection[index], index)
  }
}

export default forEach
