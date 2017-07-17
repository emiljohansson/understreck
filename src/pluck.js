import forEach from './forEach'
import isArray from './isArray'
import isUndefined from './isUndefined'

function pluck (collection, path) {
  const result = []
  if (!isArray(collection)) {
    return result
  }
  forEach(collection, item => {
    if (!isUndefined(item[path])) {
      result.push(item[path])
    }
  })
  return result
}

export default pluck
