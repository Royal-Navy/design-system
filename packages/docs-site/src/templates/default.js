import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/presenters/layout'
import Sidebar from '../components/presenters/sidebar'
import PostArticle from '../components/presenters/post-article'

import withNavigation from '../components/enhancers/withNavigation'

const NavigationSidebar = withNavigation(Sidebar)

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

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout className="">
      <Helmet title={`${post.frontmatter.title} | NELSON Standards`} />
      <PostArticle postData={post} />
      <NavigationSidebar />
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
