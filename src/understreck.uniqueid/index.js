"use strict";

var currentId = 0;

function uniqueId() {
    var id = ++currentId;
    return id;
}

module.exports = uniqueId;
