import forEach from '../understreck.foreach'

function map(collection, iteratee) {
  var result = []
  forEach(collection, item => {
    result.push(iteratee(item))
  })
  return result
}

export default map
