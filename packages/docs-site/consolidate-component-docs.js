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

// Ensure that the package docs folder is a freshly generated copy
const packageDocsFolder = join('src/generated-library/pages/develop/components/')
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

          // Check to see if a component with this name already exists
          if (!fs.existsSync(docsPath)) {
            // Doesn't exist. Create one using the 'componentName' variable and populate it with the source content
            fs.writeFileSync(docsPath, `## ${pkg.name} example`), (err) => {
              if (err) throw err
            }
            fs.appendFileSync(docsPath, fileContent.content, 'utf8')
          } else {
            const pageContent = '\n## ' + pkg.name + ' example \n' + fileContent.content
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