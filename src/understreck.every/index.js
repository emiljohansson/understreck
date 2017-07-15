"use strict";

var isArray = require('../understreck.isarray');
var isFunction = require('../understreck.isfunction');

function every(collection, predicate) { //, thisArg
    if (isArray(collection) && isFunction(predicate)) {
        return everyArray(collection, predicate);
    }
    return false;
}

function everyArray(collection, predicate) {
    var index = -1;
    var length = collection.length;
    while(++index < length) {
        if (!predicate(collection[index])) {
            return false;
        }
    }
    return true;
}

module.exports = every;
