#!/usr/bin/env node

/**
 * Consolidate component docs
 * This script finds all files contained within an 
 * `src/components` folder within the specified packages
 * and consolidates the contents into one file.
  */
const fs = require('fs')
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


const originalDocsFolder = join('src/library/pages/develop/components/')
const packageDocsFolder = join('src/generated-library/pages/develop/components/')

// Ensure that the package docs folder is a freshly generated copy
rimraf.sync(packageDocsFolder)
fs.mkdirSync(packageDocsFolder, { recursive: true }, (err) => {
  if (err) throw err
})


// Convert a string to kebab-case
const kebab = (text) => text.toString()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

// Process each package in 'packages' and look for components
packages.forEach((pkg) => {
  console.group(`🔍 Scanning ${chalk.blue(pkg.name + ' library')} for components`)
  const componentsFolder = resolve(__dirname, '../' + pkg.source + pkg.componentPath )
  const components = fs.readdirSync(componentsFolder)

  
  /**
   * injectInFile
   * Injects content into any 'framework-tabs' component it finds on a page.
   * @param {String} originalFilePath : The path to the library file which is to be updated
   * @param {Object} injectedData : The data to inject into the original file.
   */
  const injectInFile = (originalFilePath, injectedData) => {
    fs.readFile(originalFilePath, 'utf8', (err, data) => {
      if (err) throw err
      const fileContent = matter(data).content
      // Look for the 'framework-tabs' component
      const regex = new RegExp(/<\s*framework-tabs[ exclude="]*([a-zA-Z, ]*)["]*[?^>]*><\s*\/\s*framework-tabs>|<framework-tabs\/>/m)
      const match = fileContent.match(regex)
      // If the framework tabs component lists any exclusions, put them in an array for later
      const exclusions = (match) ? match[1].split(',') : null
      const newFileContent = data.replace(regex, '<test-string>')

      fs.writeFileSync(originalFilePath, newFileContent, 'utf8')
    })  
  }

  components.map((component) => {
    const componentFolder = join(componentsFolder, component)
    // Only process directories
    if (fs.lstatSync(componentFolder).isDirectory()) {
      const files = fs.readdirSync(componentFolder)
      files.map((file) => {
        // Look for readme files
        if (file.match(/README.md/gi)) {
          // Readme file find, move to docs folder
          console.group(`⚙️  Generating ${chalk.yellow(component)} docs...`)
          const filePath = resolve(componentFolder, file)
          
          // Read the file contents
          const fileContent = matter(fs.readFileSync(filePath, 'utf8'))

          // Extract component friendly name from document
          const componentName = kebab(fileContent.data.title)

          const docsPath = join(packageDocsFolder, componentName + '.md')

          injectInFile(join(originalDocsFolder, componentName + '.md'))

          // Check to see if a component with this name already exists
          if (!fs.existsSync(docsPath)) {
            // Doesn't exist. Create one using the 'componentName' variable and populate it with the source content
            fs.writeFileSync(docsPath, `<implementation type="${pkg.name}">\n\n## ${pkg.name} example\n`), (err) => {
              if (err) throw err
            }
            fs.appendFileSync(docsPath, `${fileContent.content} \n</implementation>\n\n`, 'utf8')
          } else {
            const pageContent = `<implementation type="${pkg.name}">\n\n## ${pkg.name} example\n ${fileContent.content} \n</implementation>\n\n`
            // Already exists, take the source content and append it to existing version
            fs.appendFileSync(docsPath, pageContent, 'utf8')
          }

          console.log(chalk.green(` ✓ Done`))
          console.groupEnd()
        }
      })
    }
  })
  console.groupEnd()
})