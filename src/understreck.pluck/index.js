import forEach from '../understreck.foreach'
import isArray from '../understreck.isarray'
import isUndefined from '../understreck.isundefined'

function pluck(collection, path) {
  var result = []
  if (!isArray(collection)) {
    return result
  }
  forEach(collection, function(item) {
    if (!isUndefined(item[path])) {
      result.push(item[path])
    }
  })
  return result
}

export default pluck
