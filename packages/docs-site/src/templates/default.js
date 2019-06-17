import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../helpers/css/fonts.css'

import '@royalnavy/css-framework/index.scss'

import Footer from '../components/presenters/footer'
import Layout from '../components/presenters/layout'
import PostArticle from '../components/presenters/post-article'
import Sidebar from '../components/presenters/sidebar'
import MastHead from '../components/presenters/Masthead'
import { usePrimaryNavData, useSecondaryNavData } from '../hooks'

import './default.scss'

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

export default function Template({ data, location }) {
  const primaryNavData = usePrimaryNavData(location)
  const secondaryNavData = useSecondaryNavData(location)
  const { markdownRemark: post } = data
  const hasSecondaryNav = secondaryNavData && secondaryNavData.length > 0

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | NELSON Standards`} />
      <MastHead navItems={primaryNavData} />
      <main className="main">
        <PostArticle postData={post} />
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

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}
