const TARGET_LABELS = ['Size: Small', 'Size: Medium']
const TARGET_COLUMN = 'Candidates for Ready'
const IGNORED_COLUMNS = ['Ready', 'In Progress', 'In Review', 'Done']

const parseProjectUrl = (url) => {
  const parts = url.split('/')

  return {
    orgName: parts[parts.length - 3],
    projectUrl: url,
  }
}

const fetchAllProjects = async (
  github,
  orgName,
  cursor = null,
  allProjects = []
) => {
  const query = `
    query($orgName: String!, $cursor: String) {
      organization(login: $orgName) {
        projectsV2(first: 100, after: $cursor) {
          nodes { id, url, number }
          pageInfo { hasNextPage, endCursor }
        }
      }
    }
  `

  const {
    organization: { projectsV2 },
  } = await github.graphql(query, { orgName, cursor })

  const updatedProjects = [...allProjects, ...projectsV2.nodes]

  if (projectsV2.pageInfo.hasNextPage) {
    return fetchAllProjects(
      github,
      orgName,
      projectsV2.pageInfo.endCursor,
      updatedProjects
    )
  }

  return updatedProjects
}

const getProjectData = async (github, projectUrl) => {
  const { orgName, projectUrl: fullProjectUrl } = parseProjectUrl(projectUrl)
  const allProjects = await fetchAllProjects(github, orgName)
  const project = allProjects.find((p) => p.url === fullProjectUrl)

  if (!project) {
    throw new Error(`Project not found: ${fullProjectUrl}`)
  }

  return project
}

const fetchProjectItems = async (
  github,
  projectId,
  cursor = null,
  allItems = []
) => {
  const query = `
    query($projectId: ID!, $cursor: String) {
      node(id: $projectId) {
        ... on ProjectV2 {
          items(first: 100, after: $cursor) {
            nodes {
              id
              content { ... on Issue { id } }
              fieldValues(first: 8) {
                nodes {
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                    field { ... on ProjectV2SingleSelectField { name } }
                  }
                }
              }
            }
            pageInfo { hasNextPage, endCursor }
          }
        }
      }
    }
  `

  const result = await github.graphql(query, { projectId, cursor })
  const updatedItems = [...allItems, ...result.node.items.nodes]

  if (result.node.items.pageInfo.hasNextPage) {
    return fetchProjectItems(
      github,
      projectId,
      result.node.items.pageInfo.endCursor,
      updatedItems
    )
  }

  return updatedItems
}

const getIssueItemData = async (github, projectId, issueId) => {
  const allItems = await fetchProjectItems(github, projectId)
  return allItems.find((item) => item.content && item.content.id === issueId)
}

const updateIssueStatus = async (
  github,
  projectId,
  itemId,
  statusFieldId,
  statusOptionId
) => {
  const mutation = `
    mutation($projectId: ID!, $itemId: ID!, $statusFieldId: ID!, $statusOptionId: String!) {
      updateProjectV2ItemFieldValue(
        input: {
          projectId: $projectId
          itemId: $itemId
          fieldId: $statusFieldId
          value: { singleSelectOptionId: $statusOptionId }
        }
      ) {
        projectV2Item { id }
      }
    }
  `

  await github.graphql(mutation, {
    projectId,
    itemId,
    statusFieldId,
    statusOptionId,
  })
}

const addIssueToProject = async (github, projectId, issueId) => {
  const mutation = `
    mutation($projectId: ID!, $contentId: ID!) {
      addProjectV2ItemById(input: {projectId: $projectId, contentId: $contentId}) {
        item { id }
      }
    }
  `

  const result = await github.graphql(mutation, {
    projectId,
    contentId: issueId,
  })

  return result.addProjectV2ItemById.item
}

const getStatusField = async (github, projectId) => {
  const query = `
    query($projectId: ID!) {
      node(id: $projectId) {
        ... on ProjectV2 {
          fields(first: 20) {
            nodes {
              ... on ProjectV2SingleSelectField {
                id
                name
                options { id, name }
              }
            }
          }
        }
      }
    }
  `

  const result = await github.graphql(query, { projectId })

  return result.node.fields.nodes.find((field) => field.name === 'Status')
}

const getCurrentStatus = (issueItemData) => {
  return issueItemData.fieldValues?.nodes.find(
    (node) => node.field?.name === 'Status'
  )?.name
}

const validateIssue = (issue) => {
  if (!issue || !issue.node_id) {
    throw new Error('Invalid or missing issue object')
  }

  if (!issue.labels.some((label) => TARGET_LABELS.includes(label.name))) {
    throw new Error(`Issue #${issue.number} does not have a target label`)
  }

  return true
}

const getTargetStatusOption = (statusField) => {
  const targetStatusOption = statusField.options.find(
    (option) => option.name === TARGET_COLUMN
  )

  if (!targetStatusOption) {
    throw new Error(`Target status "${TARGET_COLUMN}" not found in project`)
  }

  return targetStatusOption
}

const processIssueItem = async (github, projectData, issue) => {
  const statusField = await getStatusField(github, projectData.id)
  const targetStatusOption = getTargetStatusOption(statusField)

  let issueItemData = await getIssueItemData(
    github,
    projectData.id,
    issue.node_id
  )

  if (!issueItemData) {
    issueItemData = await addIssueToProject(
      github,
      projectData.id,
      issue.node_id
    )
  }

  const currentStatus = getCurrentStatus(issueItemData)

  if (IGNORED_COLUMNS.includes(currentStatus)) {
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

  console.log(`Moved issue #${issue.number} to "${TARGET_COLUMN}"`)
}

export const moveIssues = async ({ github, context, core }) => {
  const issue = context.payload.issue

  try {
    if (!validateIssue(issue)) {
      return
    }

    const projectData = await getProjectData(github, process.env.PROJECT_URL)
    await processIssueItem(github, projectData, issue)
  } catch (error) {
    core.setFailed(`Error moving issue: ${error.message}`)
  }
}
