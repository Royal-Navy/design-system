import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import './css/404.scss'

export default function Template() {
  return (
    <Layout className="article-page-container">
      <Helmet title="404: Page not found | Nelson Design System" />
      <div className="four-oh-four container">
        <h2 className="four-oh-four__title">404: Page Not Found</h2>
        <div className="four-oh-four__content">
          <p>
            Unfortunately, the page you are trying to visit doesn&apos;t exist.
            If you feel this is incorrect, or would like to suggest new content,
            please feel free to
            <a href="/contact-us">contact us.</a>
          </p>
          <a className="four-oh-four__home" href="/">
            Return Home
          </a>
        </div>
      </div>
    </Layout>
  )
}
