"use strict";

function isArray(collection) {
    return Object.prototype.toString.call(collection) === '[object Array]';
}

module.exports = Array.isArray || isArray;
