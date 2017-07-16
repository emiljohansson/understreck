import forEach from '../foreach'
import isArray from '../isarray'
import isUndefined from '../isundefined'

function pluck (collection, path) {
  const result = []
  if (!isArray(collection)) {
    return result
  }
  forEach(collection, item => {
    if (!isUndefined(item[path])) {
      result.push(item[path])
    }
  })
  return result
}

export default pluck
