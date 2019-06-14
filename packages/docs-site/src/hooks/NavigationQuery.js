import { graphql } from 'gatsby'

const NavigationQuery = graphql`
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
`

export default NavigationQuery
