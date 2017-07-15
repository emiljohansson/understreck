"use strict";

var forEach = require('../understreck.foreach');
const isArray = require('../understreck.isarray')
var isUndefined = require('../understreck.isundefined');

function pluck(collection, path) {
    var result = [];
    if (!isArray(collection)) {
        return result;
    }
    forEach(collection, function(item) {
        if (!isUndefined(item[path])) {
            result.push(item[path]);
        }
    });
    return result;
}

module.exports = pluck;
