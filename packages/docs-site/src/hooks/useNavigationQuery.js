import { graphql, useStaticQuery } from 'gatsby'

const QUERY = graphql`
  query Navigation {
    allMdx {
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
            draft
          }
        }
      }
    }
  }
`

const useNavigationQuery = () => {
  const {
    allMdx: { edges: pages },
  } = useStaticQuery(QUERY)

  return pages
}

export default useNavigationQuery
