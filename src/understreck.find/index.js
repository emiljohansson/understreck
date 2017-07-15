import isArray from '../understreck.isarray'
import isFunction from '../understreck.isfunction'
import findIndex from '../understreck.findindex'

function find(collection, predicate) {
  if (!isArray(collection) || !isFunction(predicate)) {
    return
  }
  var index = findIndex(collection, predicate)
  return collection[index]
}

export default find
