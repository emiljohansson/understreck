"use strict";

var isArray = require('../understreck.isarray');
var isFunction = require('../understreck.isfunction');
var findIndex = require('../understreck.findindex');

function find(collection, predicate) {
    if (!isArray(collection) || !isFunction(predicate)) {
        return;
    }
    var index = findIndex(collection, predicate);
    return collection[index];
}

module.exports = find;
