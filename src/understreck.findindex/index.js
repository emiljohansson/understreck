"use strict"

const isArray = require('../understreck.isarray')
var isFunction = require('../understreck.isfunction')

function findIndex(collection, predicate) {
    if (!isArray(collection) || !isFunction(predicate)) {
        return
    }
    var index = -1
    var length = collection.length
    while(++index < length) {
        if (predicate(collection[index])) {
            return index
        }
    }
}

module.exports = findIndex
