const insertAt = require('array-insertat')
const isArray = require('../understreck.isarray')
const isString = require('../understreck.isstring')

const getByString = (object, path) => {
  let result
  let paths = path.split('.')
  let index = paths.length
  while (index--) {
    if (paths[index].indexOf('[') > -1) {
      const arrStart = paths[index].split('[')
      const arrEnd = arrStart[1].split(']')
      const arrayKey = arrStart[0]
      const value = arrEnd[0]
      paths[index] = arrayKey
      paths = insertAt(paths, index + 1, value)
    }
  }
  return getByArray(object, paths)
}

const getByArray = (object, paths) => paths.reduce(byKey, object)

const byKey = (object, path) => {
  if (object == null) {
    return object
  }
  return object[path]
}

module.exports = (object, path, defaultValue) => {
 let result
 if (isString(path)) {
   result = getByString(object, path)
 }
 if (isArray(path)) {
   result = getByArray(object, path)
 }
 return result || defaultValue
}
