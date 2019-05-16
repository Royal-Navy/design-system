import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

import './sidebar.scss'

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

      return (
        <nav>
          <ul>
            {pages.map(page => {
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
