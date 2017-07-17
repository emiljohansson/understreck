import isUndefined from '../isUndefined'
import getTag from '../lib/getTag'

export default value =>
  getTag(value) === '[object Object]' &&
  (value.constructor === Object || isUndefined(value.constructor))
