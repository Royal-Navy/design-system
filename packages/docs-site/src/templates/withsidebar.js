import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Masthead from '../components/masthead'
import Sidebar from '../components/sidebar'
import PostArticle from '../components/post-article'

import './css/withsidebar.scss'

const BreadcrumbBar = () => {
  return <div className="breadcrumb-bar" />
}

// Run the Graphql query
export const pageQuery = graphql`
  query WithSideBarByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        description
        context
      }
    }
  }
`
export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { slug } = pageContext // Gives us a context for the sidebar to work from
  const sidebarContext = slug.split('/')[1]
  const { title, description, context } = post.frontmatter
  return (
    <Layout>
      <Helmet title={`${title} | Nelson Design System`} />
      <Masthead title={title} description={description} context={context} />
      <BreadcrumbBar />
      <main className="article-container with-sidebar">
        <div className="container">
          <Sidebar context={sidebarContext} />
          <PostArticle postData={post} />
        </div>
      </main>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
}
