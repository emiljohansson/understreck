import isArray from '../isArray'
import isFunction from '../isFunction'

function filter (collection, predicate) {
  if (!isArray(collection) || !isFunction(predicate)) {
    return []
  }
  const result = []
  const length = collection.length
  let index = -1
  while (++index < length) {
    if (predicate(collection[index])) {
      result.push(collection[index])
    }
  }
  return result
}

export default filter
