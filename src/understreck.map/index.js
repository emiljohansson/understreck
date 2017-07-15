

const forEach = require('../understreck.foreach')
const isArray = require('../understreck.isarray')
const isFunction = require('../understreck.isfunction')

function map(collection, iteratee) {
    var result = []
    if (!isArray(collection) || !isFunction(iteratee)) {
        return result
    }
    forEach(collection, function(item) {
        result.push(iteratee(item))
    })
    return result
}

module.exports = map
