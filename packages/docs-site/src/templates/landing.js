import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Masthead from '../components/masthead'

import './css/landing.scss'
import Homepage from '../components/homepage'

// Run the Graphql query
export const pageQuery = graphql`
  query LandingByPath($slug: String!) {
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
export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data

  const { title, description, context } = post.frontmatter
  return (
    <Layout className="landing-page-container">
      <Helmet title={`${title} | Nelson Design System`} />
      <Masthead
        title={title}
        description={description}
        context={context}
        className="large"
      />
      <main>
        <Homepage className="landing" postData={post} />
      </main>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
