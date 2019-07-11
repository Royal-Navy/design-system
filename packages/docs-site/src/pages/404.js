import React from 'react'
import { Helmet } from 'react-helmet'

import '../helpers/css/fonts.css'
import '@royalnavy/css-framework/index.scss'

import '../templates/default.scss'
import './css/404.scss'

import Layout from '../components/presenters/layout'
import MastHead from '../components/presenters/Masthead'
import Footer from '../components/presenters/footer'

import { usePrimaryNavData } from '../hooks'

export default function Template() {
  const primaryNavData = usePrimaryNavData({
    pathname: '/',
  })

  return (
    <Layout>
      <Helmet title="404 - Page Not Found | NELSON // Standards" />
      <MastHead navItems={primaryNavData} />
      <main className="main rn-container">
        <div className="page-not-found">
          <p>404 - Page Not Found</p>
        </div>
      </main>
      <Footer />
    </Layout>
  )
}
