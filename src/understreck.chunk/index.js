import isArray from '../understreck.isarray'

const chunk = (array, size) => {
  const result = []
  const length = array
    ? array.length
    : 0
  let startIndex = 0
  let nextIndex = size
  if (!isArray(array)) {
    return result
  }
  if (typeof size !== 'number' || size < 1 || size >= length) {
    return array
  }
  while(startIndex < length) {
    result.push(array.slice(startIndex, nextIndex))
    startIndex += size
    nextIndex += size
  }
  return result
}

export default chunk
