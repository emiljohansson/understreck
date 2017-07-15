"use strict";

const isArray = require('../understreck.isarray')

function indexOf(array, value, fromIndex) {
    if (typeof fromIndex !== 'number') {
        fromIndex = 0;
    }
    if (!isArray(array)) {
        return false;
    }
    var index = fromIndex - 1;
    var length = array.length;
    while(++index < length) {
        if (array[index] === value) {
            return true;
        }
    }
    return false;
}

module.exports = indexOf;
