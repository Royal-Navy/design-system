import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

import './sidebar.scss'

/**
 * Take a flat array of pages and recursively transform
 * into a nested data structure based on URL structure.
 *
 * TODO: Add recursion for multi-level heirarchy.
 *
 * @param {array} pages
 * @returns {array}
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

  return nestChildren(topLevel)
}

/**
 * Recursively render a nested list using JSX.
 *
 * @param {array} pages
 */
function renderList(pages) {
  return (
    <ul>
      {pages.map(page => {
        const { slug } = page.node.fields
        const { title } = page.node.frontmatter
        let subMenu

        if (page.children && page.children.length > 0) {
          subMenu = renderList(page.children)
        }

        return (
          <li key={slug}>
            <a href={slug}>
              <span>{title}</span>
            </a>
            {subMenu}
          </li>
        )
      })}
    </ul>
  )
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
          {renderList(nested)}
          <pre>{JSON.stringify(nested, undefined, 2)}</pre>
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
