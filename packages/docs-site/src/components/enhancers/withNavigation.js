import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import sortBy from 'lodash/sortBy'

/**
 * Recursively add nodes to tree structure based on slug match.
 *
 * @param {object} node
 * @param {array} treeNodes
 */
function addToTree(node, treeNodes) {
  treeNodes.forEach(treeNode => {
    const { slug } = node.node.fields
    const { slug: treeSlug } = treeNode.node.fields

    if (slug.includes(`${treeSlug}/`)) {
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
    mutatedNode.node.fields.slug =
      slug.endsWith('/') && slug !== '/' ? slug.slice(0, -1) : slug

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
  const tree = []

  const sanitizedNodes = stripTrailingSlash(
    sortBy(nodes, 'node.frontmatter.index')
  )

  sanitizedNodes.forEach(node => {
    addToTree(node, tree)
  })

  const topLevelCount = nodes.filter(node => {
    const { slug } = node.node.fields.slug
    return (slug.match(/\//g) || []).length === 1
  }).length

  return tree.slice(0, topLevelCount)
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
