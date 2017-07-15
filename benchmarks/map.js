const Benchmark = require('benchmark')
const map = require('../src/understreck.map')

const suite = new Benchmark.Suite()
const settings = {
  'async': true
}

var list = [];
for (var i = 0; i < 10000; i++) {
  list.push(i);
}

const timesByThree = value => value * 3

module.exports = (onCycle) => new Promise((resolve, reject) => {
  const onComplete = () => resolve(suite)

  suite
    .add('map#native', () => {
      list.map(timesByThree)
    })
    .add('map#understreck', () => {
      map(list, timesByThree)
    })
    .on('cycle', onCycle)
    .on('complete', onComplete)
    .run(settings)
})
