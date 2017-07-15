import isArray from '../understreck.isarray'

function indexOf (array, value, fromIndex = 0) {
  if (!isArray(array)) {
    return false
  }
  const length = array.length
  let index = fromIndex - 1
  while (++index < length) {
    if (array[index] === value) {
      return true
    }
  }
  return false
}

export default indexOf
