import test from 'ava'
import curry from '../src/curry'

test(t => {
  let createCurry = () => {
    return curry((a, b, c) => {
      return [a, b, c]
    })
  }
  let expected = [1, 2, 3]

  t.deepEqual(createCurry()(1, 2, 3), expected)
  t.deepEqual(createCurry()(1)(2)(3), expected)
  t.deepEqual(createCurry()(1)()(2)(3), expected)
  t.deepEqual(createCurry()()()()()()()()(1)(2)(3), expected)
  t.deepEqual(createCurry()(1, 2)(3), expected)
  t.deepEqual(createCurry()(1, 2, 3), expected)

  createCurry = () => {
    return curry((greet, name) => {
      return `${greet}, ${name}`
    })
  }
  expected = 'Hello, World'

  t.deepEqual(createCurry()('Hello', 'World'), expected)
  t.deepEqual(createCurry()('Hello')('World'), expected)
})
