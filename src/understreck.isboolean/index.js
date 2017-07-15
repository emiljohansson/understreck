export default value =>
  typeof value === 'boolean' ||
  Object.prototype.toString.call(value) === '[object Boolean]'
