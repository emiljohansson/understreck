import isUndefined from '../understreck.isundefined'
import toString from '../understreck.tostring'

export default value =>
  toString(value) === '[object Object]' &&
  (value.constructor === Object || isUndefined(value.constructor))
