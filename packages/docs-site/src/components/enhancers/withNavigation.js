import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import sortBy from 'lodash/sortBy'

/**
 * Strip trailing slash from all slugs, excluding the root node.
 *
 * @param {array} nodes
 * @returns {object}
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
 * @returns {array}
 */
function nestByURLStructure(nodes) {
  const tree = []

  function addToTree(node, parents) {
    const { slug } = node.node.fields

    parents.forEach(parentNode => {
      const { slug: parentSlug } = parentNode.node.fields

      if (slug.includes(`${parentSlug}/`)) {
        const index = parents.findIndex(item => item.node.fields.slug === slug)

        // eslint-disable-next-line no-param-reassign
        parents = parents.splice(0, index)

        addToTree(node, parentNode.children)
      }
    })

    parents.push({
      ...node,
      children: [],
    })
  }

  stripTrailingSlash(nodes).forEach(node => {
    addToTree(node, tree)
  })

  return sortBy(tree, 'node.frontmatter.index')
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
