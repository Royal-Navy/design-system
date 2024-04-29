import fs from 'fs'

/**
 * Used by .github/workflows/post_build_and_test.yml
 * https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#using-data-from-the-triggering-workflow
 */
export const downloadStorybookArtifact = async ({ github, context }) => {
  const allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
    owner: context.repo.owner,
    repo: context.repo.repo,
    run_id: context.payload.workflow_run.id,
  })

  const matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
    return artifact.name === 'storybook-static'
  })[0]

  const download = await github.rest.actions.downloadArtifact({
    owner: context.repo.owner,
    repo: context.repo.repo,
    artifact_id: matchArtifact.id,
    archive_format: 'zip',
  })

  fs.writeFileSync(
    `${process.env.GITHUB_WORKSPACE}/storybook-static.zip`,
    Buffer.from(download.data)
  )
}
