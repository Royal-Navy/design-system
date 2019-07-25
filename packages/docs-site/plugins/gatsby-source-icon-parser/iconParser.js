const path = require('path')
const uuidv1 = require('uuid/v1')

const searchRecursive = require('./searchRecursive')

const parseIcons = (iconDir) => {

  const parseIconFile = (file) => { 
    const id = uuidv1()
    const trimmedPath = file.replace(iconDir + '/', '')
    const category = trimmedPath.split('/').shift()
    const name = path.basename(file).replace('.svg', '')
    
    return {
      id,
      name,
      category,
      path: trimmedPath,
    }
  }

  const libraryFiles = searchRecursive(iconDir, '.svg')

  return libraryFiles.map((file) => parseIconFile(file))
}

module.exports = parseIcons