"use strict"

var keys = require('../understreck.keys')
const isArray = require('../understreck.isarray')
var isFunction = require('../understreck.isfunction')

function reduce(collection, iteratee, accumulator, thisArg) {
    if (isArray(collection)) {
        return reduceArray(collection, iteratee, accumulator, thisArg)
    }
    if (typeof collection === 'object') {
        return reduceObject(collection, iteratee, accumulator, thisArg)
    }
}

function reduceArray(collection, iteratee, accumulator, thisArg) {
    if (!isFunction(iteratee)) {
        return collection[0]
    }
    var index = -1
    var length = collection.length
    accumulator = collection[++index]
    while (++index < length) {
        accumulator = iteratee(accumulator, collection[index])
    }
    return accumulator
}

function reduceObject(collection, iteratee, accumulator, thisArg) {
    var keyList = keys(collection)
    if (!isFunction(iteratee)) {
        return collection[keyList[0]]
    }
    var index = -1
    var length = keyList.length
    accumulator = collection[keyList[++index]]
    while (index < length) {
        accumulator = iteratee(collection, collection[keyList[index]], keyList[index])
        index++
    }
    return accumulator
}

module.exports = reduce
