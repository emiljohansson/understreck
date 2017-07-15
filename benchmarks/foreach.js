const Benchmark = require('benchmark')
const { forEach } = require('../dist/understreck')

const suite = new Benchmark.Suite()
const settings = {
  'async': true
}

const list = []
for (let i = 0; i < 10000; i++) {
  list.push(i)
}

const forEachIteratee = () => {
  const arr = []
  return item => {
    arr.push(item)
  }
}

module.exports = (onCycle) => new Promise((resolve, reject) => {
  const onComplete = () => resolve(suite)

  suite
    .add('forEach#native', () => {
      list.forEach(forEachIteratee())
    })
    .add('forEach#understreck', () => {
      forEach(list, forEachIteratee())
    })
    .on('cycle', onCycle)
    .on('complete', onComplete)
    .run(settings)
})
