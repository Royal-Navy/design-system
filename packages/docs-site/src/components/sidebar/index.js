import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

import './sidebar.scss'

/**
 * Take a flat array of pages and recursively transform
 * into a nested data structure based on URL structure.
 *
 * TODO: Add recursion for multi-level heirarchy.
 *
 * @param {Array} pages
 * @returns {Array}
 */
function nest(pages) {
  // Start with all of the top level pages
  const topLevel = pages.filter(page => {
    const { slug } = page.node.fields
    const matches = (slug.match(/\//g) || []).length

    return [1, 2].includes(matches)
  })

  // Nest children that match parent slug
  function nestChildren(parents) {
    return parents.map(item => {
      const children = pages.filter(page => {
        const { slug } = page.node.fields
        const { slug: parentSlug } = item.node.fields.slug

        return (
          slug.includes(parentSlug) && slug !== parentSlug && parentSlug !== '/'
        )
      })

      return {
        ...item,
        children,
      }
    })
  }

  return nestChildren(topLevel)
}

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query Sidebar {
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

      const nested = nest(pages)

      return (
        <nav>
          <ul>
            {nested.map(page => {
              const {
                node: {
                  fields: { slug = '#' },
                  frontmatter: { title = 'undefined' },
                },
              } = page

              return (
                <li key={slug}>
                  <a href={slug}>
                    <span>{title}</span>
                  </a>
                  {}
                </li>
              )
            })}
          </ul>
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </nav>
      )
    }}
  />
)

Sidebar.propTypes = {
  //
}

Sidebar.defaultProps = {
  //
}

export default Sidebar
