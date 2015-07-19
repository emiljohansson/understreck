"use strict";

var find = require('list-files');
var dirName = 'src/node_modules';
var prefix = 'js';

find(function(result) {
    var testFiles = result.filter(getTestFileNames)
        .map(removePrefix)
        .map(removeDirName);
    executeTests(testFiles);
}, {
    dir: dirName,
    name: prefix
});

function getTestFileNames(fileName) {
    return fileName.indexOf('test.js') >= 0;
}

function removePrefix(fileName) {
    return fileName.replace('.' + prefix, '');
}

function removeDirName(fileName) {
    var index = fileName.indexOf(dirName);
    index += dirName.length;
    return fileName.substring(index + 1);
}

function executeTests(files) {
    files.forEach(executeTest);
}

function executeTest(fileName) {
    require(fileName);
}
