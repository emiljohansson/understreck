import keys from '../keys'
import isArray from '../isarray'
import isFunction from '../isfunction'

function reduce (collection, iteratee, accumulator, thisArg) {
  if (isArray(collection)) {
    return reduceArray(collection, iteratee, accumulator, thisArg)
  }
  if (typeof collection === 'object') {
    return reduceObject(collection, iteratee, accumulator, thisArg)
  }
}

function reduceArray (collection, iteratee, accumulator, thisArg) {
  if (!isFunction(iteratee)) {
    return collection[0]
  }
  let index = -1
  const length = collection.length
  accumulator = collection[++index]
  while (++index < length) {
    accumulator = iteratee(accumulator, collection[index])
  }
  return accumulator
}

function reduceObject (collection, iteratee, accumulator, thisArg) {
  const keyList = keys(collection)
  if (!isFunction(iteratee)) {
    return collection[keyList[0]]
  }
  let index = -1
  const length = keyList.length
  accumulator = collection[keyList[++index]]
  while (index < length) {
    accumulator = iteratee(collection, collection[keyList[index]], keyList[index])
    index++
  }
  return accumulator
}

export default reduce
