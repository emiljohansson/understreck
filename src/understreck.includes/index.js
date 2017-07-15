"use strict"

var forEach = require('../understreck.foreach')
var indexOf = require('../understreck.indexof')
const isArray = require('../understreck.isarray')
var isString = require('../understreck.isstring')
var keys = require('../understreck.keys')

function includes(collection, target, fromIndex) {
    if (typeof fromIndex !== 'number') {
        fromIndex = 0
    }
    if (isArray(collection)) {
        return indexOf(collection, target, fromIndex)
    }
    if (isString(collection)) {
        return inString(collection, target)
    }
    if (typeof collection === 'object') {
        return inObject(collection, target)
    }
    return false
}

function inObject(collection, target) {
    var result = false
    forEach(keys(collection), function(key) {
        if (collection[key] === target) {
            result = true
        }
    })
    return result
}

function inString(collection, target, fromIndex) {
    return collection.indexOf(target, fromIndex) >= 0
}

module.exports = includes
