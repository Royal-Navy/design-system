import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import PostArticle from '../components/post-article'

export const pageQuery = graphql`
  query NoSideBarByPath($slug: String!) {
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
      <Sidebar />
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
