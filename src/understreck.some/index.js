

const isArray = require('../understreck.isarray')
const isFunction = require('../understreck.isfunction')

function some(collection, predicate) { //, thisArg
    var length = collection ? collection.length : 0
    if (isArray(collection) && isFunction(predicate)) {
        var index = -1
        while(++index < length) {
            if (predicate(collection[index])) {
                return true
            }
        }
        return false
    }
    return false
}

module.exports = some
