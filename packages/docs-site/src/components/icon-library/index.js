import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import IconCategoryList from '../icon-category-list'

export default () => (
  <StaticQuery
    query={graphql`
      query IconLibrary {
        allIcons {
          edges {
            node {
              id
              category
              name
              path
            }
          }
        }
      }
    `}
    render={data => <IconCategoryList key="icon-list" icons={data} />}
  />
)
