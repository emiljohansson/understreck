const isArray = require('../understreck.isarray')
const isFunction = require('../understreck.isfunction')

function forEach(collection, iteratee) {
  if (!isArray(collection) || !isFunction(iteratee)) {
    return
  }
  var index = -1
  var length = collection.length
  while (++index < length) {
    iteratee(collection[index], index)
  }
}

module.exports = forEach
