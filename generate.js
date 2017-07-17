const createFile = require('create-file')
const find = require('list-files')
const replaceFirst = require('string-replace-first')

const moduleStart = './src/understreck.'

let template = `{imports}
{exports}`

find(paths => {
  const names = paths
    .filter(path => path.indexOf('/test.js') < 0 && path.indexOf('/lib/') < 0)
    .map(path => {
      const i = path.indexOf('/index.js')
      return path.slice(0, i)
    })
    .map(path => path.split('/')[2])
  template = replaceFirst(template, '{imports}', createImports(names))
  template = replaceFirst(template, '{exports}', createExports(names))
  createFile('./understreck.js', template)
}, {
  dir: 'src',
  name: 'js'
})

const createImports = names => names
  .reduce((result, name) => {
    result += `${getImport(name)}\n`
    return result
  }, '')

const getImport = name => `import ${name} from './src/${name}'`

const createExports = names => names
  .reduce((result, name) => {
    result += `${getExport(name)}\n`
    return result
  }, '')

const getExport = name => `exports.${name} = ${name}`
