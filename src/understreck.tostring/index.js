import isNumber from '../understreck.isnumber'

export default value => {
  if (value == null) {
    return ''
  }
  if (isNumber(value) && 1 / value === -Infinity) {
    return '-0'
  }
  return value.toString()
}
