const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const map = require('./src/understreck.map')

// add tests
suite
  .add('map#push', () => {
    let index = 10
    const arr = []
    while (index--) {
      arr.push(index)
    }
  })
  .add('map#index', () => {
    let index = 10
    const arr = Array(index)
    while (index--) {
      arr[index] = index
    }
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('Fastest is ' + suite.filter('fastest').map('name'))
  })
  .run({
      'async': true
  })
