import getTag from '../lib/getTag'

const isArray = collection => getTag(collection) === '[object Array]'

export default Array.isArray || isArray
