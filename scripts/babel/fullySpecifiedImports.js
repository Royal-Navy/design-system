const fs = require('fs')
const path = require('path')

const SOURCE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx']

function isFile(filePath) {
  return fs.statSync(filePath, { throwIfNoEntry: false })?.isFile() ?? false
}

function resolveRelative(specifier, fromDir) {
  const base = path.resolve(fromDir, specifier)

  if (SOURCE_EXTENSIONS.some((ext) => isFile(`${base}${ext}`))) {
    return `${specifier}.js`
  }

  if (SOURCE_EXTENSIONS.some((ext) => isFile(path.join(base, `index${ext}`)))) {
    return `${specifier}/index.js`
  }

  return specifier
}

function splitPackageSpecifier(specifier) {
  const parts = specifier.split('/')
  const nameLength = specifier.startsWith('@') ? 2 : 1

  return {
    packageName: parts.slice(0, nameLength).join('/'),
    subpath: parts.slice(nameLength).join('/'),
  }
}

// Deep imports into packages without an `exports` map (e.g. `lodash/range`)
// need the file extension under Node ESM resolution.
function resolvePackageSubpath(specifier, fromDir) {
  const { packageName, subpath } = splitPackageSpecifier(specifier)

  if (!subpath || path.extname(subpath)) {
    return specifier
  }

  try {
    const packageJsonPath = require.resolve(`${packageName}/package.json`, {
      paths: [fromDir],
    })

    if (require(packageJsonPath).exports) {
      return specifier
    }

    const resolved = require.resolve(specifier, { paths: [fromDir] })
    const relative = path.relative(path.dirname(packageJsonPath), resolved)

    return `${packageName}/${relative.split(path.sep).join('/')}`
  } catch {
    return specifier
  }
}

function fullySpecify(specifier, fromDir) {
  if (specifier.startsWith('.')) {
    return resolveRelative(specifier, fromDir)
  }

  return resolvePackageSubpath(specifier, fromDir)
}

module.exports = function fullySpecifiedImports() {
  function updateSource(nodePath, state) {
    const { source } = nodePath.node

    if (!source || !state.filename) {
      return
    }

    source.value = fullySpecify(source.value, path.dirname(state.filename))
  }

  return {
    name: 'fully-specified-imports',
    visitor: {
      ImportDeclaration: updateSource,
      ExportAllDeclaration: updateSource,
      ExportNamedDeclaration: updateSource,
    },
  }
}
