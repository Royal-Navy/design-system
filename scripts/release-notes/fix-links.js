const { Octokit } = require('@octokit/rest')

const github = new Octokit({
  auth: process.env.GH_TOKEN,
})
const { version } = require('../../lerna')
const owner = process.argv[2]
const repo = process.argv[3]

function getRelease() {
  return github.repos.getReleaseByTag({
    owner,
    repo,
    tag: version,
  })
}

function fixLinks({ data: release }) {
  const urlPattern = /https:\/\/(\w+)\.github\.com\//g
  const githubBaseUrl = 'https://github.com/'

  const body = release.body.replace(urlPattern, githubBaseUrl)

  return github.repos.updateRelease({
    body,
    owner,
    repo,
    release_id: release.id,
  })
}

console.log('Fixing links')

getRelease()
  .then(fixLinks)
  .then(() => {
    console.log('Fixed')
    process.exit(0)
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
