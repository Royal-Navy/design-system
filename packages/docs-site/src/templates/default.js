import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import '@royalnavy/css-framework/index.scss'

import Layout from '../components/presenters/layout'
import Sidebar from '../components/presenters/sidebar'
import PostArticle from '../components/presenters/post-article'
import HeroBanner from '../components/presenters/hero-banner'

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
      <HeroBanner title="Design your application using NELSON styles, components and patterns" text="Esse dolor eu fugiat anim cupidatat minim esse occaecat. Commodo aliquip elit quis proident excepteur est occaecat ea sunt dolor id commodo. Nisi occaecat irure mollit voluptate aliqua dolore cupidatat dolore officia. Ex sint esse do aliquip ut ullamco minim labore cupidatat excepteur consectetur anim dolor. Dolore ad Lorem deserunt aliqua Lorem excepteur." ctaLink="test" ctaText="Get started"/>
      <PostArticle postData={post} />
      {/* <NavigationSidebar /> */}
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
