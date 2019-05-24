import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import sortBy from 'lodash/sortBy'

let tree = []

/**
 * Recursively add nodes to tree structure based on slug match.
 *
 * @param {object} node
 * @param {array} treeNodes
 */
function addToTree(node, treeNodes) {
  treeNodes.forEach(treeNode => {
    const { slug } = node.node.fields
    const { slug: parentSlug } = treeNode.node.fields

    if (slug.includes(`${parentSlug}/`)) {
      const index = tree.findIndex(item => item.node.fields.slug === slug)

      // eslint-disable-next-line no-param-reassign
      treeNodes = treeNodes.splice(0, index)

      addToTree(node, treeNode.children)
    }
  })

  treeNodes.push({
    ...node,
    children: [],
  })
}

/**
 * Strip trailing slash from all slugs, excluding the root node.
 *
 * @param {array} nodes
 * @return {object}
 */
function stripTrailingSlash(nodes) {
  return nodes.map(node => {
    const { slug } = node.node.fields
    const mutatedNode = node

    if (slug.endsWith('/') && slug !== '/') {
      mutatedNode.node.fields.slug = slug.slice(0, -1)
    }

    return mutatedNode
  })
}

/**
 * Take a flat array of pages and recursively transform
 * into a nested data structure based on URL structure.
 *
 * @param {array} nodes
 * @return {array}
 */
function nestByURLStructure(nodes) {
  tree = []

  const sanitizedNodes = stripTrailingSlash(
    sortBy(nodes, 'node.frontmatter.index')
  )

  sanitizedNodes.forEach(node => {
    addToTree(node, tree)
  })

  return tree
}

const withNavigation = BaseComponent => props => (
  <StaticQuery
    query={graphql`
      query Navigation {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                status
                index
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        allMarkdownRemark: { edges: pages },
      } = data

      const nested = nestByURLStructure(pages)

      return <BaseComponent {...props} navigation={nested} />
    }}
  />
)

export default withNavigation
