import isArray from './isArray'
import isFunction from './isFunction'

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
