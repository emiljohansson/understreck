const forEach = require('../understreck.foreach')

function map(collection, iteratee) {
  var result = []
  forEach(collection, item => {
    result.push(iteratee(item))
  })
  return result
}

module.exports = map
