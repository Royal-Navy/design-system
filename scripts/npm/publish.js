const util = require('util')
const exec = util.promisify(require('child_process').exec)

function getPackageDetails (workingDirectory) {
  const { name, version } = require(`../../${workingDirectory}/package.json`)
  return {
    name,
    version,
  }
}

function canPublish (package) {
  const command = `npm view ${package}`
  return exec(command).then(({ stdout, stderr }) => {
    return Promise.resolve(!stdout.length && !stderr.length)
  })
}

function publish (registry, tag, workingDirectory) {
  const command = `npm publish --registry ${registry} --tag ${tag}`

  return exec(command, { cwd: workingDirectory })
}

(async function runPublish() {
  try {
    const registry = process.argv[2]
    const tag = process.argv[3]
    const workingDirectory = process.argv[4]
    const { name, version } = getPackageDetails(workingDirectory)
    const packageWithVersion = `${name}@${version}`

    if (!await canPublish(packageWithVersion)) {
      console.warn(`Not publishing ${packageWithVersion} because it already exists in the registry`)
      process.exit(0)
    }

    console.info(`Publishing ${packageWithVersion}`)

    await publish(registry, tag, workingDirectory)

    console.info(`Published ${packageWithVersion}`)

    process.exit(0)
  } catch (e) {
    console.error('Error running npm publish', e)
    process.exit(1)
  }
})()

