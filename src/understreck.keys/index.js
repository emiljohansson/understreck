"use strict";

function keys(object) {
    var result = [];
    if (typeof object !== 'object' && typeof object !== 'string') {
        return result;
    }
    for (var key in object) {
        result.push(key);
    }
    return result;
}

module.exports = keys;
