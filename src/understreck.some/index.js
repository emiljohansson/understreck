"use strict";

var isArray = require('../understreck.isarray');
var isFunction = require('../understreck.isfunction');

function some(collection, predicate) { //, thisArg
    var length = collection ? collection.length : 0;
    if (isArray(collection) && isFunction(predicate)) {
        var index = -1;
        while(++index < length) {
            if (predicate(collection[index])) {
                return true;
            }
        }
        return false;
    }
    return false;
}

module.exports = some;
