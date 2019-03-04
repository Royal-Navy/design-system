#!/usr/bin/env node

/**
 * Sync Versions
 * Called from the npm version command. This script
 * updates all the packages within the repo to have the
 * same version as the parent package number
 */
const fs = require('fs')
const resolve = require('path').resolve
const join = require('path').join
const { execSync } = require('child_process')

const newVersion = process.env.npm_package_version

const packages = resolve(__dirname, '../packages/')

function updateVersion(path, version) {
  const file = require(path)

  file.version = version

  fs.writeFile(path, JSON.stringify(file, null, 2) + '\n', err => {
    if (err) return console.log(err)
    console.log(`Update ${path} to ${version}`)
    execSync(`git add ${path}`)
  })
}

fs.readdirSync(packages).forEach(mod => {
  const modPath = join(packages, mod)
  const packagePath = join(modPath, 'package.json')
  if (fs.existsSync(packagePath)) {
    updateVersion(packagePath, newVersion)
  }
})
