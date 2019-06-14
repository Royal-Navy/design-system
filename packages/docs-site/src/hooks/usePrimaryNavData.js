import { useStaticQuery, graphql } from 'gatsby'
import startsWith from 'lodash/startsWith'

import { nestByURLStructure, stripLeadingSlash } from '../utils/nav'

const QUERY = graphql`
  query PrimaryNavigation {
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
`

const usePrimaryNavData = location => {
  const {
    allMarkdownRemark: { edges: pages },
  } = useStaticQuery(QUERY)

  const nested = nestByURLStructure(pages)
  const parsedCurrentLocation = stripLeadingSlash(location.pathname)

  return nested.map(({ href, label }) => {
    const parsedLink = stripLeadingSlash(href)
    const active =
      (parsedLink.length === 0 && parsedCurrentLocation.length === 0) ||
      (parsedLink.length > 0 && startsWith(parsedCurrentLocation, parsedLink))

    return {
      active,
      href,
      label,
    }
  })
}

export default usePrimaryNavData
