import forEach from '../understreck.foreach'
import isArray from '../understreck.isarray'
import isUndefined from '../understreck.isundefined'

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
