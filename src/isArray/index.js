import getTag from '../lib/gettag'

const isArray = collection => getTag(collection) === '[object Array]'

export default Array.isArray || isArray
