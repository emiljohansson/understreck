export default func => {
  const length = func.length
  let values = []

  const callback = (...args) => {
    values = values.concat(args)
    if (values.length === length) {
      return func.apply(null, values)
    }
    return callback
  }

  return callback
}
