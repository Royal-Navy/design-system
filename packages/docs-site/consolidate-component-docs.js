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

// A list of packages to check
const packages = [
  {
    source: 'vue-component-library',
    name: 'vue',
    componentPath: '/src/components'
  },
  {
    source: 'react-component-library',
    name: 'react',
    componentPath: '/src/components'
  },
  {
    source: 'html-storybook',
    name: 'html',
    componentPath: '/src/components'
  },
]

packages.forEach((pkg) => {
  console.group(`Scanning ${pkg.name} for components`)
  const packageDocsFolder = join('src/generated-library/pages/develop/' + pkg.name)
  const componentsFolder = resolve(__dirname, '../' + pkg.source + pkg.componentPath )
  // Check a folder exists for the current package and create one if not
  if (!fs.existsSync(packageDocsFolder)) {
    fs.mkdirSync(packageDocsFolder, { recursive: true }, (err) => {
      if (err) throw err
    })
  }
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
          console.log(`Readme found in ${component}, moving to ${packageDocsFolder}`)
          fs.copyFileSync(resolve(componentFolder, file), join(packageDocsFolder, component + '.md'), (err) => {
            if (err) throw err
          })
        }
      })
    }
  })
  console.groupEnd()
})