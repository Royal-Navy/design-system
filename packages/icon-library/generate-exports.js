const fs = require('fs')
const path = require('path')

const srcPath = path.join('src', 'icons')
const outputPath = path.join('src', 'index.ts')

const files = fs.readdirSync(srcPath)
const tsxFiles = files.filter(file => file.endsWith('.tsx'))

const importsStr = tsxFiles.reduce((accumulator, currentValue) => {
  const baseName = path.basename(currentValue, '.tsx')
  return `${accumulator}import Icon${baseName} from './icons/${baseName}'\n`
}, '')

let exportsStr = tsxFiles.reduce((accumulator, currentValue) => {
  const baseName = path.basename(currentValue, '.tsx')
  return `${accumulator}Icon${baseName}, `
}, 'export {\n')

exportsStr += '\n}\n'

if (fs.statSync(outputPath)) {
  fs.unlinkSync(outputPath)
}

fs.writeFile(outputPath, `${importsStr}\n\n${exportsStr}`, err => {
  if (err) {
    return console.log(err)
  }

  console.log('Exports saved')
})
