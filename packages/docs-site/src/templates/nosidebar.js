import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Masthead from '../components/masthead'
import PostArticle from '../components/post-article'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
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
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout className="article-container">
      <Masthead />
      <Helmet title={`${post.frontmatter.title} | Nelson Design System`} />
      <PostArticle postData={post} />
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
