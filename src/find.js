import findIndex from './findIndex'

function find (collection, predicate) {
  const index = findIndex(collection, predicate)
  return collection[index]
}

export default find
