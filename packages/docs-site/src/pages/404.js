import React from 'react'
import { Helmet } from 'react-helmet'

import './css/404.scss'

import Layout from '../components/layout'

export default function Template() {
  return (
    <Layout className="">
      <Helmet title="404 - Page Not Found | NELSON Standards" />
      <div className="page-not-found">
        <p>404 - Page Not Found</p>
      </div>
    </Layout>
  )
}
