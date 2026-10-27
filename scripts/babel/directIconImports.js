const fs = require('fs')
const path = require('path')

const ICON_LIBRARY = '@royalnavy/icon-library'
const REEXPORT_PATTERN =
  /export\s*\{\s*default\s+as\s+(\w+)\s*\}\s*from\s*["']\.\/([^"']+)["']/g

const exportPathsByPackageDir = new Map()

function loadExportPaths(fromDir) {
  const packageJsonPath = require.resolve(`${ICON_LIBRARY}/package.json`, {
    paths: [fromDir],
  })
  const packageDir = path.dirname(packageJsonPath)

  if (!exportPathsByPackageDir.has(packageDir)) {
    const entry = require(packageJsonPath).module
    const source = fs.readFileSync(path.join(packageDir, entry), 'utf8')
    const entryDir = path.posix.dirname(entry)
    const exportPaths = new Map()

    for (const [, name, file] of source.matchAll(REEXPORT_PATTERN)) {
      exportPaths.set(
        name,
        `${ICON_LIBRARY}/${path.posix.join(entryDir, file)}`
      )
    }

    if (exportPaths.size === 0) {
      throw new Error(`No icon exports found in ${ICON_LIBRARY}/${entry}`)
    }

    exportPathsByPackageDir.set(packageDir, exportPaths)
  }

  return exportPathsByPackageDir.get(packageDir)
}

// Importing each icon from its own module stops unbundled consumers (e.g.
// Node, Vitest) from evaluating every icon behind the barrel.
module.exports = function directIconImports({ types: t }) {
  return {
    name: 'direct-icon-imports',
    visitor: {
      ImportDeclaration(nodePath, state) {
        const { node } = nodePath

        if (
          node.source.value !== ICON_LIBRARY ||
          node.importKind === 'type' ||
          !state.filename
        ) {
          return
        }

        const exportPaths = loadExportPaths(path.dirname(state.filename))
        const directImports = []

        node.specifiers = node.specifiers.filter((specifier) => {
          const exportPath =
            t.isImportSpecifier(specifier) &&
            specifier.importKind !== 'type' &&
            exportPaths.get(specifier.imported.name)

          if (!exportPath) {
            return true
          }

          directImports.push(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier(specifier.local.name))],
              t.stringLiteral(exportPath)
            )
          )
          return false
        })

        if (directImports.length === 0) {
          return
        }

        if (node.specifiers.length === 0) {
          nodePath.replaceWithMultiple(directImports)
        } else {
          nodePath.insertAfter(directImports)
        }
      },
    },
  }
}
