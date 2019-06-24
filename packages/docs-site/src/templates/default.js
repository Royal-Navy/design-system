import { Masthead } from '@royalnavy/react-component-library'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../helpers/css/fonts.css'
import '@royalnavy/css-framework/index.scss'

import './default.scss'

import Footer from '../components/presenters/footer'
import Layout from '../components/presenters/layout'
import PostArticle from '../components/presenters/post-article'
import Sidebar from '../components/presenters/sidebar'
import { usePrimaryNavData, useSecondaryNavData } from '../hooks'

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

const PageTemplate = ({ data: { mdx }, location }) => {
  const primaryNavData = usePrimaryNavData(location)
  const secondaryNavData = useSecondaryNavData(location)
  const hasSecondaryNav = secondaryNavData && secondaryNavData.length > 0

  return (
    <Layout>
      <Helmet title={`${mdx.frontmatter.title} | NELSON // Standards`} />
      <Masthead navItems={primaryNavData} phase="alpha" title="STANDARDS" />
      <main className="main">
        <PostArticle mdx={mdx.code.body} />
        {hasSecondaryNav && (
          <Sidebar
            className="aside aside--primary"
            navItems={secondaryNavData}
          />
        )}
      </main>
      <Footer />
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

export default PageTemplate
