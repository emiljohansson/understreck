"use strict";

const isArray = require('../understreck.isarray')
var isFunction = require('../understreck.isfunction');

function forEach(collection, iteratee) {
    if (!isArray(collection) || !isFunction(iteratee)) {
        return;
    }
    var index = collection.length;
    while(index--) {
        iteratee(collection[index], index);
    }
}

module.exports = forEach;
