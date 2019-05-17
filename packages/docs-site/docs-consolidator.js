#!/usr/bin/env node

/**
 * Consolidate component docs
 * This script finds all README.md contained within an 
 * `src/components` folder within the specified packages
 * and consolidates the contents into one file within the gatsby library.
 **/

const fs = require('fs-extra')
const { resolve } = require('path')
const { join } = require('path')
const matter = require('gray-matter')
const chalk = require('chalk')
const rimraf = require('rimraf')
const { execSync } = require('child_process')
const package = require('./package.json')

// A list of packages to check
const packages = package.packages

// The original docs from the 'documentation' package
const originalDocsFolder = resolve(__dirname, '../documentation/library')
const libraryDocsFolder = resolve(__dirname, './src/library')
const packageDocsFolder = 'src/generated-library/pages/components/'

// Ensure that the package docs folder is a freshly generated copy
rimraf.sync(packageDocsFolder)
fs.mkdirSync(packageDocsFolder, { recursive: true })

// Convert a string to kebab-case
const kebab = text => text
    .toString()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

// Takes a string of exclusions and returns a normalised array.
const exclusions = match => match[2]
    .toLowerCase()
    .replace(' ', '')
    .split(',')

/**
 * returnFinalData
 * Looks through the data of an existing page for a 'framework-tabs' component and adds component docs to it
 * @param {String} data : The path to the library file which is to be updated
 * @param {Object} componentData : The data from the packageLoop
 */
const returnFinalData = (data, componentData) => {
  // Look for the 'framework-tabs' component
  const regex = new RegExp(/(<\s*framework-tabs[ exclude="]*([a-zA-Z, ]*)["]*[?^>]*>)(<\s*\/\s*framework-tabs>)/m)
  const match = matter(data).content.match(regex)
  // If the framework tabs component lists any exclusions, put them in an array for later
  const docs = componentData.map(cd => {
    if (exclusions(match).includes(cd.package.toLowerCase())) return
    return `\n<implementation type="${cd.package}">\n${cd.content}\n</implementation>\n`
  }).join('')
  return data.replace(regex, match[1] + docs + match[3])
} 

/**
 * injectInFile
 * Injects content from returnFinalData() into a page
 * @param {String} originalFilePath : The path to the library file which is to be updated
 * @param {Object} componentData : The data from the packageLoop
 */
const injectInFile = (originalFilePath, componentData) => {
  fs.readFile(originalFilePath, 'utf8', (err, data) => {
    if (err) throw err
    fs.writeFileSync(originalFilePath, returnFinalData(data, componentData), 'utf8')
  })  
}
// All components from the componentLoop should be collected in this array
const accumulatedData = []

/**
 * componentLoop
 * Loops through all components within the specified package and 
 * adds the contents of their README.md files to an array
 * @param {String} componentsFolder : The path to the components folder of the package
 * @param {String} package : The name of the package
 */

const componentLoop = (componentsFolder, package) => {
  const components = fs.readdirSync(componentsFolder)
  return components.forEach(component => {
    const componentFolder = join(componentsFolder, component)
    // Only process directories
    if (!fs.lstatSync(componentFolder).isDirectory()) return
    return fs.readdirSync(componentFolder).forEach(file => {
      // Look for readme files
      if (file.match(/README.md/gi)) { 
        // Read the file contents
        const fileContent = matter(fs.readFileSync(resolve(componentFolder, file), 'utf8'))
        console.group(`⚙️  Generating ${chalk.yellow(component)} docs...`)
        accumulatedData.push({
          package,
          component: kebab(fileContent.data.title),
          content: fileContent.content
        })
        console.log(chalk.green(` ✓ Done`))
        console.groupEnd()          
      }
    })
  })
}

// Loops through all packages to find components and returns the final array ready for processing
const packageLoop = () => {
  packages.forEach(pkg => {
    console.group(`🔍 Scanning ${chalk.blue(pkg.name + ' library')} for components`)
    const componentsFolder = resolve(__dirname, '../' + pkg.source + pkg.componentPath )
    componentLoop(componentsFolder, pkg.name)
    console.groupEnd()
  })
  return accumulatedData
}

const allComponents = packageLoop()

// Copy all docs from 'documentation' package to gatsby's 'library' folder (delete old version if exists) and processes finalised files
rimraf.sync(libraryDocsFolder)
fs.copy(originalDocsFolder, libraryDocsFolder, err => {
  if (err) throw err
  const docsPath = join(libraryDocsFolder, '/pages/develop/components')
  fs.readdirSync(docsPath).forEach(doc => {
    if (doc.match(/.md/gi)) {
      const docName = doc.replace('.md', '')
      const currentComponent = allComponents.filter(component => {
        if (component.component.toLowerCase() === docName.toLowerCase()) return component
      })
      injectInFile(join(docsPath, doc), currentComponent)
      console.log(chalk.green(` ✓ Proccessing of ${doc}, complete.`))
    }
  })
})

// Merge all pages from the local-library folder into the main library, anything placed in here will overwrite anything above
execSync(`cp -R  ${resolve(__dirname, './src/local-library/')} ${libraryDocsFolder}/`)
