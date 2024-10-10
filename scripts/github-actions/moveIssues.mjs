const targetLabels = ['Size: Small', 'Size: Medium']
const targetColumn = 'Candidates for Ready'
const ignoredColumns = ['Ready', 'In Progress', 'In Review', 'Done']

function hasTargetLabel(issue) {
  return issue.labels.some((label) => targetLabels.includes(label.name))
}

async function getTargetProject(github, core) {
  const project = await github.rest.projects.listForOrg({
    org: 'Royal-Navy',
    per_page: 100,
  })

  const targetProject = project.data.find(
    (p) => p.html_url === process.env.PROJECT_URL
  )

  if (!targetProject) {
    core.setFailed('Target project not found')
    return null
  }

  return targetProject
}

async function getTargetColumnId(github, projectId, core) {
  const columns = await github.rest.projects.listColumns({
    project_id: projectId,
  })

  const targetColumnId = columns.data.find(
    (column) => column.name === targetColumn
  )?.id

  if (!targetColumnId) {
    core.setFailed('Target column not found')
    return null
  }

  return targetColumnId
}

async function isIssueInIgnoredColumn(github, columnId, issue) {
  const projectCards = await github.rest.projects.listCards({
    column_id: columnId,
  })

  return projectCards.data.some(
    (card) =>
      card.content_url === issue.url &&
      ignoredColumns.includes(card.column_name)
  )
}

async function moveIssueToTargetColumn(github, columnId, issue) {
  await github.rest.projects.createCard({
    column_id: columnId,
    content_id: issue.id,
    content_type: 'Issue',
  })
}

export async function moveIssues({ github, context, core }) {
  const issue = context.payload.issue

  if (!hasTargetLabel(issue)) {
    return
  }

  const targetProject = await getTargetProject(github, core)
  if (!targetProject) {
    return
  }

  const targetColumnId = await getTargetColumnId(github, targetProject.id, core)
  if (!targetColumnId) {
    return
  }

  if (await isIssueInIgnoredColumn(github, targetColumnId, issue)) {
    console.log('Issue is already in an ignored column')
    return
  }

  await moveIssueToTargetColumn(github, targetColumnId, issue)
  console.log(`Moved issue #${issue.number} to ${targetColumn}`)
}
