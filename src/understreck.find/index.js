const isArray = require('../understreck.isarray')
const isFunction = require('../understreck.isfunction')
const findIndex = require('../understreck.findindex')

function find(collection, predicate) {
    if (!isArray(collection) || !isFunction(predicate)) {
        return
    }
    var index = findIndex(collection, predicate)
    return collection[index]
}

module.exports = find
