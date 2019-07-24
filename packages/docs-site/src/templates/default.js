import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import '../helpers/css/fonts.css'
import '@royalnavy/css-framework/index.scss'

import './default.scss'

import Layout from '../components/presenters/layout'
import MastHead from '../components/presenters/Masthead'
import Sidebar from '../components/presenters/sidebar'
import PostArticle from '../components/presenters/post-article'
import Footer from '../components/presenters/footer'

import { usePrimaryNavData, useSecondaryNavData } from '../hooks'

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        header
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
      <MastHead navItems={primaryNavData} />
      <main className="main rn-container">
        <PostArticle
          title={mdx.frontmatter.title}
          description={mdx.frontmatter.description}
          mdx={mdx.code.body}
          header={mdx.frontmatter.header}
        />
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
