import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

import './sidebar.scss'

/**
 * Take a flat array of pages and recursively transform into
 * a nested data structure based on the URL structure.
 *
 * TODO: Refactor and add recursion for multi-level heirarchy.
 *
 * @param {Array} pages
 * @returns {Array} nested
 */
// eslint-disable-next-line func-names
const nestPages = function(pages) {
  const parents = pages.filter(page => {
    const { slug } = page.node.fields
    const matches = (slug.match(/\//g) || []).length

    return [1, 2].includes(matches)
  })

  // eslint-disable-next-line no-restricted-syntax
  for (const [i, v] of parents.entries()) {
    // eslint-disable-next-line no-loop-func
    const children = pages.filter(item => {
      const { slug } = item.node.fields
      const { slug: parentSlug } = v.node.fields.slug

      return (
        slug.includes(parentSlug) && slug !== parentSlug && parentSlug !== '/'
      )
    })

    parents[i] = {
      ...v,
      children,
    }
  }

  return parents
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

      const nested = nestPages(pages)

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
