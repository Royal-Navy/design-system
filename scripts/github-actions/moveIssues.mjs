const targetLabels = ['Size: Small', 'Size: Medium']
const targetColumnName = 'Candidates for Ready'
const ignoredColumnNames = ['Ready', 'In Progress', 'In Review', 'Done']

async function getProjectData(github, projectUrl) {
  const [orgName, projectNumber] = projectUrl.split('/').slice(-2)

  const query = `
    query($orgName: String!, $projectNumber: Int!) {
      organization(login: $orgName) {
        projectV2(number: $projectNumber) {
          id
          fields(first: 20) {
            nodes {
              ... on ProjectV2Field {
                id
                name
              }
              ... on ProjectV2SingleSelectField {
                id
                name
                options {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  `

  const variables = {
    orgName,
    projectNumber: parseInt(projectNumber),
  }

  const result = await github.graphql(query, variables)
  console.log('Project data:', JSON.stringify(result, null, 2))
  return result.organization.projectV2
}

async function getIssueItemData(github, projectId, issueId) {
  const query = `
    query($projectId: ID!, $issueId: ID!) {
      node(id: $projectId) {
        ... on ProjectV2 {
          items(first: 1, filter: {contentId: $issueId}) {
            nodes {
              id
              fieldValues(first: 8) {
                nodes {
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                    field {
                      ... on ProjectV2SingleSelectField {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  const variables = {
    projectId,
    issueId,
  }

  const result = await github.graphql(query, variables)
  console.log('Issue item data:', JSON.stringify(result, null, 2))
  return result.node.items.nodes[0]
}

async function updateIssueStatus(
  github,
  projectId,
  itemId,
  statusFieldId,
  statusOptionId
) {
  const mutation = `
    mutation($projectId: ID!, $itemId: ID!, $statusFieldId: ID!, $statusOptionId: String!) {
      updateProjectV2ItemFieldValue(
        input: {
          projectId: $projectId
          itemId: $itemId
          fieldId: $statusFieldId
          value: {
            singleSelectOptionId: $statusOptionId
          }
        }
      ) {
        projectV2Item {
          id
        }
      }
    }
  `

  const variables = {
    projectId,
    itemId,
    statusFieldId,
    statusOptionId,
  }

  const result = await github.graphql(mutation, variables)
  console.log('Update result:', JSON.stringify(result, null, 2))
}

export async function moveIssues({ github, context, core }) {
  console.log('Starting moveIssues function')
  console.log(`PROJECT_URL: ${process.env.PROJECT_URL}`)

  const issue = context.payload.issue
  if (!issue || !issue.node_id) {
    core.setFailed('Invalid or missing issue object')
    return
  }

  console.log(`Processing issue #${issue.number}`)

  if (!issue.labels.some((label) => targetLabels.includes(label.name))) {
    console.log(`Issue #${issue.number} does not have a target label`)
    return
  }

  try {
    const projectData = await getProjectData(github, process.env.PROJECT_URL)
    const statusField = projectData.fields.nodes.find(
      (field) => field.name === 'Status'
    )
    if (!statusField) {
      core.setFailed('Status field not found in project')
      return
    }

    const targetStatusOption = statusField.options.find(
      (option) => option.name === targetColumnName
    )
    if (!targetStatusOption) {
      core.setFailed(`Target status "${targetColumnName}" not found in project`)
      return
    }

    const issueItemData = await getIssueItemData(
      github,
      projectData.id,
      issue.node_id
    )
    if (!issueItemData) {
      core.setFailed(`Issue #${issue.number} not found in project`)
      return
    }

    const currentStatus = issueItemData.fieldValues.nodes.find(
      (node) => node.field?.name === 'Status'
    )?.name
    if (ignoredColumnNames.includes(currentStatus)) {
      console.log(
        `Issue #${issue.number} is in an ignored column (${currentStatus}). Skipping.`
      )
      return
    }

    await updateIssueStatus(
      github,
      projectData.id,
      issueItemData.id,
      statusField.id,
      targetStatusOption.id
    )
    console.log(`Moved issue #${issue.number} to "${targetColumnName}"`)
  } catch (error) {
    core.setFailed(`Error moving issue: ${error.message}`)
    console.log('Full error:', JSON.stringify(error, null, 2))
  }
}
