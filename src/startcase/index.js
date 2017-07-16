import toString from '../toString'
import baseUpperCase from '../lib/baseuppercase'

const notEmpty = string => string.length > 0

const removeEmpty = array => array.filter(notEmpty)

const upperFirst = string => baseUpperCase(string[0]) + string.slice(1)

const charIsUpperCased = character => character === baseUpperCase(character)

const upperFirstEachWord = string => string
  .split(' ')
  .filter(notEmpty)
  .map(upperFirst)
  .join(' ')

export default string => {
  string = toString(string)
  string = removeEmpty(string.split('-')).join(' ')
  string = removeEmpty(string.split('_')).join(' ')
  string = upperFirstEachWord(string)

  const length = string.length
  const words = []
  let index = -1
  let currentIndex = 0
  while (++index < length) {
    if (words[currentIndex] == null) {
      words[currentIndex] = ''
    }
    const character = string[index]
    const nextChar = toString(string[index + 1])

    if (words[currentIndex] === ' ') {
      words[currentIndex] = character
    } else if (charIsUpperCased(character)) {
      words[currentIndex] += character
    } else {
      words[currentIndex] += character
      if (charIsUpperCased(nextChar)) {
        currentIndex++
      }
    }
  }
  return words.join(' ')
}
