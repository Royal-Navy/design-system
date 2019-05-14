const iconParser = require('./iconParser')

exports.sourceNodes = ({actions, createNodeId, createContentDigest}, configOptions) => {
  const { createNode } = actions
  delete configOptions.plugins

  const processIcon = icon => {
    const nodeId = createNodeId(`icon-${icon.id}`)
    const nodeContent = JSON.stringify(icon)
    const nodeData = Object.assign({}, icon, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Icons`,
        content: nodeContent,
        contentDigest: createContentDigest(icon),
      },
    })

    return nodeData
  }

  // Retrieve icons
  const icons = iconParser(configOptions.path)

  icons.map (icon => {
    // Process the photo data to match the structure of a Gatsby node
    const nodeData = processIcon(icon)
    
    // Use Gatsby's createNode helper to create a node from the node data
    createNode(nodeData)
  })
}