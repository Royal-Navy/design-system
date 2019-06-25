#!/usr/bin/env node

/**
 * Consolidate component docs
 * This script finds all README.md contained within an
 * `src/components` folder within the specified packages
 * and consolidates the contents into one file within the gatsby library.
 */

const fs = require('fs-extra')
const { resolve } = require('path')
const { join } = require('path')
const matter = require('gray-matter')
const chalk = require('chalk')
const rimraf = require('rimraf')
const { kebabCase } = require('lodash')
const { execSync } = require('child_process')
const manifest = require('./package.json')
const { convertToMDX } = require('./readme-preparser')

// A list of packages to check
const { packages } = manifest

// The original docs from the 'documentation' package
const originalDocsFolder = resolve(__dirname, '../documentation/library')
const libraryDocsFolder = resolve(__dirname, './src/library')
const packageDocsFolder = 'src/generated-library/pages/components/'

// Ensure that the package docs folder is a freshly generated copy
rimraf.sync(packageDocsFolder) // deletes old folder
fs.mkdirSync(packageDocsFolder, { recursive: true }) // Creates new tree structure

/**
 * exclusions
 * Takes a string of exclusions and returns a normalised array.
 * @param {String} match: A comma-seperated list of packages to exclude from processing.
 */
const exclusions = match =>
  match[2]
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
  const regex = new RegExp(
    /(<\s*framework-tabs[ exclude="]*([a-zA-Z, ]*)["]*[?^>]*>)(<\s*\/\s*framework-tabs>)/m
  )
  const match = matter(data).content.match(regex)
  if (!match) return data
  // If the framework tabs component lists any exclusions, put them in an array for later
  const docs = componentData
    .map(cd => {
      if (exclusions(match).includes(cd.package.toLowerCase())) return
      return `\n<implementation type="${cd.package}">\n${cd.content}\n</implementation>\n`
    })
    .join('')
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
    fs.writeFileSync(
      originalFilePath,
      returnFinalData(data, componentData),
      'utf8'
    )
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
        const fileContent = matter(
          fs.readFileSync(resolve(componentFolder, file), 'utf8')
        )

        const mdx = convertToMDX(fileContent.content)

        console.group(`⚙️  Generating ${chalk.yellow(component)} docs...`)
        accumulatedData.push({
          package,
          component: kebabCase(fileContent.data.title),
          content: mdx,
        })
        console.log(chalk.green(` ✓ Done`))
        console.groupEnd()
      }
    })
  })
}

/**
 * packageLoop
 * Loops through all packages to find components and returns the final array ready for processing
 */
const packageLoop = () => {
  packages.forEach(pkg => {
    console.group(
      `🔍 Scanning ${chalk.blue(pkg.name + ' library')} for components`
    )
    const componentsFolder = resolve(
      __dirname,
      '../' + pkg.source + pkg.componentPath
    )
    componentLoop(componentsFolder, pkg.name)
    console.groupEnd()
  })
  return accumulatedData
}

// Store the results of the packageLoop in this array
const allComponents = packageLoop()

/**
 * readComponent
 * Looks at a path and returns the title name from that files frontmatter tags
 * @param {String} thisFile: The path to the component it should be matching
 */
const readComponent = thisFile =>
  allComponents.filter(component =>
    component.component.toLowerCase() ===
    matter(fs.readFileSync(thisFile)).data.title.toLowerCase()
      ? component
      : false
  )

/**
 * logOutputBuilder
 * Builds an output to display in the console when a doc has been processed
 * @param {String} prefix: The subfolder that the current component readme is in (defaults to false if no prefix is provided)
 * @param {String} doc: The filename of the current component readme
 */
const logOutputBuilder = (doc, prefix) => {
  const logOutput = prefix ? `${prefix}/${doc}` : doc
  return console.log(
    chalk.green(` ✓ Proccessing of ${chalk.blue(logOutput)}, complete.`)
  )
}
/**
 * matchDocs
 * Proccesses all files found in the folderloop and if they are a markdown file they proccess them,
 * if they are a directory then run folderloop again inside that directory.
 * @param {String} docsPath: The full path to the docs folder
 * @param {String} doc: The filename of the current readme file
 * @param {String} prefix The subfolder that the current component readme is in (defaults to false if no prefix is provided)
 */
const matchDocs = (docsPath, doc, prefix) => {
  const thisFile = join(docsPath, doc)
  if (doc.match(/.md/gi)) {
    injectInFile(thisFile, readComponent(thisFile))
    logOutputBuilder(doc, prefix)
  } else {
    if (fs.lstatSync(thisFile).isDirectory()) {
      return folderLoop(thisFile, doc)
    }
  }
}

/**
 * folderLoop
 * Loops through the component docs folder and reads the files and
 * then passes the results to matchDocs
 * @param {String} docsPath The full path to the docs folder
 * @param {String} prefix The subfolder that the current component readme is in (defaults to false if no prefix is provided)
 */
const folderLoop = (docsPath, prefix) =>
  fs.readdirSync(docsPath).forEach(doc => matchDocs(docsPath, doc, prefix))

// Copy all docs from 'documentation' package to gatsby's 'library' folder (delete old version if exists) and processes finalised files
rimraf.sync(libraryDocsFolder)
fs.copy(originalDocsFolder, libraryDocsFolder, err => {
  if (err) throw err
  const docsPath = join(libraryDocsFolder, '/pages/components')
  folderLoop(docsPath)
})

// Merge all pages from the local-library folder into the main library, anything placed in here will overwrite anything above
execSync(
  `cp -R  ${resolve(__dirname, './src/local-library/')} ${libraryDocsFolder}/`
)
