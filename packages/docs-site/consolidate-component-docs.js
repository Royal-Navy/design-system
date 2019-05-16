#!/usr/bin/env node

/**
 * Consolidate component docs
 * This script finds all files contained within an 
 * `src/components` folder within the specified packages
 * and consolidates the contents into one file.
  */
const fs = require('fs-extra')
const resolve = require('path').resolve
const join = require('path').join
const matter = require('gray-matter')
const chalk = require('chalk')
const rimraf = require('rimraf')

// A list of packages to check
const packages = [
  {
    source: 'vue-component-library',
    name: 'Vue',
    componentPath: '/src/components'
  },
  {
    source: 'react-component-library',
    name: 'React',
    componentPath: '/src/components'
  },
  {
    source: 'html-storybook',
    name: 'HTML',
    componentPath: '/src/components'
  },
]


const originalDocsFolder = resolve(__dirname, '../documentation/library/pages')
const libraryDocsFolder = resolve(__dirname, './src/library/pages')
const packageDocsFolder = 'src/generated-library/pages/develop/components/'

// Ensure that the package docs folder is a freshly generated copy
rimraf.sync(packageDocsFolder)
fs.mkdirSync(packageDocsFolder, { recursive: true })

// Convert a string to kebab-case
const kebab = (text) => text.toString()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

/**
 * injectInFile
 * Injects content into any 'framework-tabs' component it finds on a page.
 * @param {String} originalFilePath : The path to the library file which is to be updated
 * @param {Object} data : The data from the packageLoop
 */
const injectInFile = (originalFilePath, componentData) => {
  fs.readFile(originalFilePath, 'utf8', (err, data) => {
    if (err) throw err
    const fileContent = matter(data).content
    // Look for the 'framework-tabs' component
    const regex = new RegExp(/(<\s*framework-tabs[ exclude="]*([a-zA-Z, ]*)["]*[?^>]*>)(<\s*\/\s*framework-tabs>)/m)
    const match = fileContent.match(regex)
    // If the framework tabs component lists any exclusions, put them in an array for later
    const exclusions = (match) ? match[2].toLowerCase().replace(' ', '').split(',') : null
    const datatoInject = componentData.map(cd => {
      if (exclusions.includes(cd.package.toLowerCase())) return
      return `\n<implementation type="${cd.package}">\n${cd.content}\n</implementation>\n`
    })
    const newFileContent = match[1] + datatoInject.join('') + match[3];
    const injectedData = data.replace(regex, newFileContent)
    fs.writeFileSync(originalFilePath, injectedData, 'utf8')
  })  
}

const packageLoop = () => {
  const accumulatedData = []
  packages.forEach((pkg) => {
    console.group(`🔍 Scanning ${chalk.blue(pkg.name + ' library')} for components`)
    const componentsFolder = resolve(__dirname, '../' + pkg.source + pkg.componentPath )
    const components = fs.readdirSync(componentsFolder)
  
    components.forEach((component) => {
      const componentFolder = join(componentsFolder, component)
      // Only process directories
      if (!fs.lstatSync(componentFolder).isDirectory()) return
      return fs.readdirSync(componentFolder).forEach(file => {
        // Look for readme files
        if (file.match(/README.md/gi)) {
          // Readme file find, move to docs folder
          console.group(`⚙️  Generating ${chalk.yellow(component)} docs...`)
  
          // Read the file contents
          const fileContent = matter(fs.readFileSync(resolve(componentFolder, file), 'utf8'))
  
          accumulatedData.push({
            package: pkg.name,
            component: kebab(fileContent.data.title),
            content: fileContent.content
          })
  
          console.log(chalk.green(` ✓ Done`))
          console.groupEnd()
        }
      })
    })
    console.groupEnd()
  })
  return accumulatedData
}

// Move all docs from 'documentation' package to gatsby's 'library' folder (delete old version if exists)
rimraf.sync(libraryDocsFolder)
fs.copy(originalDocsFolder, libraryDocsFolder, (err) => {
  if (err) throw err
  const docsPath = join(libraryDocsFolder, '/develop/components')
  fs.readdirSync(docsPath).forEach(doc => {
    if (doc.match(/.md/gi)) {
      const docName = doc.replace('.md', '')
      const currentComponent = packageLoop().filter(component => {
        if (component.component.toLowerCase() === docName.toLowerCase()) return component
      })
      injectInFile(join(docsPath, doc), currentComponent)
    }
  })
})



