import commitlint from '@commitlint/lint'

import config from '../../commitlint.config.js'

const lint = commitlint.default
const { rules } = config

function getPrOptions(prUrl) {
  const prUrlParts = prUrl.split('/')

  return {
    owner: prUrlParts[prUrlParts.length - 4],
    repo: prUrlParts[prUrlParts.length - 3],
    pull_number: prUrlParts[prUrlParts.length - 1],
  }
}

function lintCommits(commits) {
  const promises = commits.data.map((commit) => {
    return lint(commit.commit.message, rules)
  })

  return Promise.all(promises)
}

export async function runCommitLint({ github, context, core }) {
  const prOptions = getPrOptions(context.payload.pull_request._links.html.href)
  const prCommits = await github.rest.pulls.listCommits(prOptions)
  const lintResults = await lintCommits(prCommits)

  const lintErrors = lintResults.filter((result) => !result.valid)
  lintErrors.forEach(({ errors, input }) => {
    errors.forEach((error) => {
      console.error(
        `Commit message \`${input}\` has error \`${error.message}\``
      )
    })
  })

  if (lintErrors.length) {
    core.setFailed('commitlint: invalid commit messages found')
  } else {
    console.info('commitlint check complete')
  }
}
