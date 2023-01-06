function getPrOptions(prUrl) {
  const prUrlParts = prUrl.split('/')

  return {
    owner: prUrlParts[prUrlParts.length - 4],
    repo: prUrlParts[prUrlParts.length - 3],
    pull_number: prUrlParts[prUrlParts.length - 1],
  }
}

function checkCommitMessages(commits) {
  return commits.data.map(({ commit: { message } }) => {
    return {
      message,
      valid: message.indexOf('fixup!') === -1,
    }
  })
}

export async function checkForFixups({ github, context, core }) {
  const prOptions = getPrOptions(context.payload.pull_request._links.html.href)
  const prCommits = await github.rest.pulls.listCommits(prOptions)

  const fixupResults = await checkCommitMessages(prCommits)

  const errors = fixupResults.filter((result) => !result.valid)
  errors.forEach(({ message }) => {
    console.error(`Commit message \`${message}\` is a fixup`)
  })

  if (errors.length) {
    core.setFailed('fixup commits found')
  } else {
    console.info('fixup check complete')
  }
}
