"use strict";

var isArray = require('../understreck.isarray');

function chunk(array, size) {
    var result = [];
    var length = array ? array.length : 0;
    var startIndex = 0;
    var nextIndex = size;
    if (!isArray(array)) {
        return result;
    }
    if (typeof size !== 'number' || size < 1 || size >= length) {
        return array;
    }
    while(startIndex < length) {
        result.push(array.slice(startIndex, nextIndex));
        startIndex += size;
        nextIndex += size;
    }
    return result;
}

module.exports = chunk;
