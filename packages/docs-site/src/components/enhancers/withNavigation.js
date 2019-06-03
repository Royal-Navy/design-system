import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import sortBy from 'lodash/sortBy'

/**
 * Strip trailing slash from a URI, excluding a root node.
 *
 * @param {string} href
 * @returns {string}
 */
function stripTrailingSlash(href) {
  return href.endsWith('/') && href !== '/' ? href.slice(0, -1) : href
}

/**
 * Restructure nodes into something that can be more
 * easily consumed by the application.
 *
 * @param {array} nodes
 * @returns {array}
 */
function restructureNodes(nodes) {
  return nodes.map(node => {
    return {
      href: stripTrailingSlash(node.node.fields.slug),
      label: node.node.frontmatter.title,
    }
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
    const { href } = node

    parents.forEach(parentNode => {
      const { href: parentHref } = parentNode

      if (href.includes(`${parentHref}/`)) {
        const index = parents.findIndex(item => item.href === href)

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

  const sorted = sortBy(nodes, 'node.frontmatter.index')

  restructureNodes(sorted).forEach(node => {
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
