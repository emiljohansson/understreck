import toString from '../understreck.tostring'

const isArray = collection => toString(collection) === '[object Array]'

export default Array.isArray || isArray
