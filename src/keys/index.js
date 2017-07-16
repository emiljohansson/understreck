import isString from '../isstring'

function keys (object) {
  const result = []
  if (typeof object !== 'object' && !isString(object)) {
    return result
  }
  for (let key in object) {
    result.push(key)
  }
  return result
}

export default keys
