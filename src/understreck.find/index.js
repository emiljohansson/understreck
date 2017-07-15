import findIndex from '../understreck.findindex'

function find (collection, predicate) {
  const index = findIndex(collection, predicate)
  return collection[index]
}

export default find
