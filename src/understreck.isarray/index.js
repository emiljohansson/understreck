const isArray = collection => Object.prototype.toString.call(collection) === '[object Array]'

export default Array.isArray || isArray
