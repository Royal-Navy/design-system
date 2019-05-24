import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import sortBy from 'lodash/sortBy'

/**
 * Take a flat array of pages and recursively transform
 * into a nested data structure based on URL structure.
 *
 * TODO: Implement recursion for multi-level heirarchy.
 *
 * @param {array} pages
 * @returns {array}
 */
function nestByURLStructure(pages) {
  // Nest children that match parent slug
  function nest(parents) {
    return parents.map(parent => {
      const children = pages.filter(page => {
        const { slug } = page.node.fields
        const { slug: parentSlug } = parent.node.fields

        return (
          slug.includes(parentSlug) && slug !== parentSlug && parentSlug !== '/'
        )
      })

      return {
        ...parent,
        children,
      }
    })
  }

  // Start with all of the top level pages
  const topLevel = pages.filter(page => {
    const { slug } = page.node.fields
    const matches = (slug.match(/\//g) || []).length

    return [1, 2].includes(matches)
  })

  // Sort pages based on `index` frontmatter
  const topLevelSorted = sortBy(topLevel, 'node.frontmatter.index')

  return nest(topLevelSorted)
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
