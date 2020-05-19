const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

const versionsPath = path.join(process.cwd(), '/src/library/pages/versions.md')
const buffer = fs.readFileSync(versionsPath)

const version = process.argv[2]
const id = uuid.v4().replace(/-/g, '')

const nextVersion = `# Versions

## ${version}
* [Release note](https://github.com/Royal-Navy/design-system/releases/tag/${version})
* [Documentation](https://${id}-design-system.netlify.com)`

const versionsContent = buffer.toString().replace('# Versions', nextVersion)

fs.writeFileSync(versionsPath, versionsContent)
