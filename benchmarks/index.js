const chalk = require('chalk')

const benchmarks = [
  require('./foreach'),
  require('./map')
]

const onCycle = event => console.log(String(event.target))

const loadBenchmark = index => {
  if (index >= benchmarks.length) {
    return
  }
  benchmarks[index](onCycle).then(suite => {
    const name = suite.filter('fastest').map('name')
    const color = name[0].indexOf('understreck') > -1
      ? chalk.green
      : chalk.red
    console.log(color(`Fastest is ${name}`))
    loadBenchmark(index + 1)
  })
}

loadBenchmark(0)
