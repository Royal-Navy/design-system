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

// Check a folder exists for the current package and create one if not
const packageDocsFolder = join('src/generated-library/pages/develop/components/')
if (!fs.existsSync(packageDocsFolder)) {
  fs.mkdirSync(packageDocsFolder, { recursive: true }, (err) => {
    if (err) throw err
  })
}

// Convert a string to kebab-case
const kebab = (text) => text.toString()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

// Process each package and find components within those packages
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
          
          const fileContent = fs.readFileSync(resolve(componentFolder, file), 'utf8')
          const componentName = kebab(matter(fileContent).data.title)

          fs.copyFileSync(resolve(componentFolder, file), join(packageDocsFolder, componentName + '.md'), (err) => {
            if (err) throw err
          })

          console.log(chalk.green(` ✓ Done`))
          console.groupEnd()
        }
      })
    }
  })
  console.groupEnd()
})