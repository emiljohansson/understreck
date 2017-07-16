import getTag from '../.internal/gettag'

const isArray = collection => getTag(collection) === '[object Array]'

export default Array.isArray || isArray
