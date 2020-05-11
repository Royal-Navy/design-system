const { Octokit } = require('@octokit/rest')

function getPrOptions(prUrl) {
  const prUrlParts = prUrl.split('/')

  return {
    owner: prUrlParts[prUrlParts.length - 4],
    repo: prUrlParts[prUrlParts.length - 3],
    pull_number: prUrlParts[prUrlParts.length - 1],
  }
}

function getCommitsByPr(options) {
  const github = new Octokit({
    auth: process.env.GH_TOKEN,
  })
  return github.pulls.listCommits(options)
}

function checkFixups(commits) {
  return commits.data.map(({ commit: { message } }) => {
    return {
      message,
      valid: message.indexOf('fixup!') === -1
    }
  })
}

(async function runCheckFixups() {
  try {
    if (process.argv[2]) {
      const prOptions = getPrOptions(process.argv[2])
      const prCommits = await getCommitsByPr(prOptions)

      const fixupResults = await checkFixups(prCommits)

      const errors = fixupResults.filter(result => !result.valid)
      errors.forEach(({ message }) => {
        console.error(
          `Commit message \`${message}\` is a fixup`
        )
      })

      if (errors.length) {
        process.exit(1)
      }
    }

    process.exit(0)
  } catch (e) {
    console.error('Error running check fixups', e)
    process.exit(1)
  }
})()
