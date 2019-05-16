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
      return (
        <nav>
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
