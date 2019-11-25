import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/presenters/layout'
import MastHead from '../components/presenters/Masthead'
import Sidebar from '../components/presenters/sidebar'
import PostArticle from '../components/presenters/post-article'
import Footer from '../components/presenters/footer'
import HeroBanner from '../components/presenters/hero-banner'

import { usePrimaryNavData, useSecondaryNavData } from '../hooks'

export const pageQuery = graphql`
  query HomePageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        header
      }
      body
    }
  }
`

const HomeTemplate = ({ data: { mdx }, location }) => {
  const primaryNavData = usePrimaryNavData(location)
  const secondaryNavData = useSecondaryNavData(location)
  const hasSecondaryNav = secondaryNavData && secondaryNavData.length > 0

  return (
    <Layout>
      <Helmet title={`${mdx.frontmatter.title} | NELSON Standards`} />
      <MastHead navItems={primaryNavData} />
      <HeroBanner
        title="Build your application using NELSON styles and components"
        text="Use this design system to build applications and services for the Royal Navy. The website includes guidance, a component library and prototyping tools. Use these to save time and give users a consistent experience that meets the NELSON Standard."
        ctaText="Get started"
        ctaLink="/get-started"
      />
      <main className="main rn-container">
        <PostArticle
          title={mdx.frontmatter.title}
          description={mdx.frontmatter.description}
          mdx={mdx.body}
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

HomeTemplate.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

export default HomeTemplate
