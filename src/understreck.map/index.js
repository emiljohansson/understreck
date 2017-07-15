"use strict";

var forEach = require('../understreck.foreach');
var isArray = require('../understreck.isarray');
var isFunction = require('../understreck.isfunction');

function map(collection, iteratee) {
    var result = [];
    if (!isArray(collection) || !isFunction(iteratee)) {
        return result;
    }
    forEach(collection, function(item) {
        result.push(iteratee(item));
    });
    return result;
}

module.exports = map;
