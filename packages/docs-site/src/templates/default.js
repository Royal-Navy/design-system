import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import '@royalnavy/fonts'
import 'firacode'

import Layout from '../components/presenters/layout'
import MastHead from '../components/presenters/Masthead'
import Sidebar from '../components/presenters/sidebar'
import PostArticle from '../components/presenters/post-article'
import Footer from '../components/presenters/footer'

import { usePrimaryNavData, useSecondaryNavData } from '../hooks'

import favicon16 from '../library/images/favicons/favicon-16x16.png'
import favicon32 from '../library/images/favicons/favicon-32x32.png'
import favicon96 from '../library/images/favicons/favicon-96x96.png'

export const pageQuery = graphql`
  query PageQuery($id: String) {
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

const PageTemplate = ({ data: { mdx }, location }) => {
  const primaryNavData = usePrimaryNavData(location)
  const secondaryNavData = useSecondaryNavData(location)
  const hasSecondaryNav = secondaryNavData && secondaryNavData.length > 0
  const activeTopLevel = primaryNavData.find((item) => item.active)
  const sidebarTitle = (activeTopLevel && activeTopLevel.label) || ''

  return (
    <Layout>
      <Helmet
        title={`${mdx.frontmatter.title} | Royal Navy Design System`}
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${favicon16}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${favicon32}`,
          },
          {
            rel: 'shortcut icon',
            type: 'image/png',
            href: `${favicon96}`,
          },
        ]}
      />
      <MastHead navItems={primaryNavData} />
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
            title={sidebarTitle}
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
