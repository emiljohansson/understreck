import toString from '../tostring'

export default string => {
  string = toString(string)
  string = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
  return string
}
