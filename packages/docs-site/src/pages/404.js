/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/presenters/layout'
import MastHead from '../components/presenters/Masthead'
import HeroBanner from '../components/presenters/hero-banner'
import Card from '../components/presenters/card'
import Footer from '../components/presenters/footer'

import { usePrimaryNavData } from '../hooks'

export default function Template() {
  const primaryNavData = usePrimaryNavData({
    pathname: '/',
  })

  return (
    <Layout>
      <Helmet title="Page not found | NELSON Standards" />
      <MastHead navItems={primaryNavData} />
      <main className="main rn-container">
        <article className="post-article page-not-found">
          <HeroBanner title="Page not found" footnote={false} />
          <Card
            type="borderless"
            text={
              <>
                <p>If you typed the web address, check it is correct.</p>
                <p>
                  If you pasted the web address, check you copied the entire
                  address.
                </p>
                <p>
                  <a href="/contact">Contact the Standards team</a> if you
                  beleive you are seeing this message error.
                </p>
                <hr />
              </>
            }
            linkText="Home page"
            linkHref="/"
          />
        </article>
      </main>
      <Footer />
    </Layout>
  )
}
