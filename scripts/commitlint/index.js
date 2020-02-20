const { Octokit } = require('@octokit/rest')
const lint = require('@commitlint/lint')

const { rules } = require('../../commitlint.config')

function getPrOptions() {
  const prUrl = process.argv[2]
  const prUrlParts = prUrl.split('/')

  return {
    owner: prUrlParts[prUrlParts.length - 4],
    repo: prUrlParts[prUrlParts.length - 3],
    pull_number: prUrlParts[prUrlParts.length - 1],
  }
}

function getCommitsByPr(options) {
  const github = new Octokit()
  return github.pulls.listCommits(options)
}

function lintCommits(commits) {
  const promises = commits.data.map(commit => {
    return lint(commit.commit.message, rules)
  })

  return Promise.all(promises)
}

(async function runCommitLint() {
  try {
    const prOptions = getPrOptions()
    const prCommits = await getCommitsByPr(prOptions)
    const lintResults = await lintCommits(prCommits)

    const resultsWithErrors = lintResults.filter(result => !result.valid)
    resultsWithErrors.forEach(({ errors, input }) => {
      errors.forEach(error => {
        console.error(
          `Commit message \`${input}\` has error \`${error.message}\``
        )
      })
    })

    process.exit(resultsWithErrors.length ? 1 : 0)
  } catch (e) {
    console.error('Error running commitlint', e)
    process.exit(1)
  }
})()
