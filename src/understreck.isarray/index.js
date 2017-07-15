const isArray = collection => Object.prototype.toString.call(collection) === '[object Array]'

module.exports = Array.isArray || isArray
