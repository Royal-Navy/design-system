import { graphql, useStaticQuery } from 'gatsby'

const QUERY = graphql`
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

const useNavigationQuery = () => {
  const {
    allMarkdownRemark: { edges: pages },
  } = useStaticQuery(QUERY)

  return pages
}

export default useNavigationQuery
