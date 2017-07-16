import isUndefined from '../understreck.isundefined'
import getTag from '../.internal/gettag'

export default value =>
  getTag(value) === '[object Object]' &&
  (value.constructor === Object || isUndefined(value.constructor))
