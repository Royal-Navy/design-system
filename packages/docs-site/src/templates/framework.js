import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Badge } from '@royalnavy/react-component-library'
import { IconChevronLeft } from '@royalnavy/icon-library'
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import '@royalnavy/fonts'
import 'firacode'

import packageJson from '../../package'

import favicon16 from '../library/images/favicons/favicon-16x16.png'
import favicon32 from '../library/images/favicons/favicon-32x32.png'
import favicon96 from '../library/images/favicons/favicon-96x96.png'

export const pageQuery = graphql`
  query FrameworkPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
      body
    }
  }
`

const FrameworkPageTemplate = ({ data: { mdx } }) => {
  const [menuToggle, setMenuToggle] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <section className="rn-fw">
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
      <div className="rn-fw-bar">
        <button
          type="button"
          className="rn-fw-sidebar-toggle rn-fw-sidebar-open"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          Menu
        </button>
        <div className="rn-fw-bar-ds">
          <span className="rn-fw-bar-title rn_mr-4">
            Royal Navy Design System
          </span>
          <Badge color="action">v{packageJson.version}</Badge>
        </div>
      </div>
      <div
        className={
          menuToggle ? 'rn-fw-sidebar-frame is-open' : 'rn-fw-sidebar-frame'
        }
      >
        <div className="rn-fw-sidebar">
          <div className="rn-fw-sidebar-fixed">
            <a href="/" className="rn-fw-sidebar-home-link">
              <IconChevronLeft />
              Back to docs
            </a>
            <div className="rn-fw-sidebar-header">
              <Badge color="action" colorVariant="solid" size="small">
                Framework
              </Badge>
              <h1 className="rn-fw-sidebar-title">Compound Timeline</h1>
            </div>
            <button
              type="button"
              className="rn-fw-sidebar-toggle rn-fw-sidebar-close"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              Close
            </button>
          </div>
          <nav className="rn-fw-sidebar-nav rn-fw-sidebar-scroll">
            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">Introduction</h4>
              <ul className="rn-fw-sidebar-nav-list">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#motivation">
                    Motivation
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#live-example">
                    Live example
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#installation">
                    Installation
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#options">
                    Options
                  </a>
                </li>
              </ul>
            </section>

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">Documentation</h4>
              <ul className="rn-fw-sidebar-nav-list">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a
                    className="rn-fw-sidebar-nav-link"
                    href="#compound-components-composition"
                  >
                    Compound Components &amp; Composition
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a
                    className="rn-fw-sidebar-nav-link"
                    href="#custom-component-presentation"
                  >
                    Custom Component Presentation
                    <span className="rn-fw-sidebar-nav-link-child">
                      Render Props
                    </span>
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a
                    className="rn-fw-sidebar-nav-link"
                    href="#context-provider"
                  >
                    Context Provider
                    <span className="rn-fw-sidebar-nav-link-child">
                      State &amp; Action Dispatcher
                    </span>
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#hooks">
                    Hooks
                    <span className="rn-fw-sidebar-nav-link-child">
                      useTimelinePosition
                    </span>
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a
                    className="rn-fw-sidebar-nav-link"
                    href="#advanced-custom-layouts"
                  >
                    Advanced Custom Layouts
                  </a>
                </li>
              </ul>
            </section>

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">Hook APIs</h4>
              <ul className="rn-fw-sidebar-nav-list is-code">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a
                    className="rn-fw-sidebar-nav-link"
                    href="#useTimelinePosition"
                  >
                    useTimelinePosition
                  </a>
                </li>
              </ul>
            </section>

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">
                Component APIs
              </h4>
              <ul className="rn-fw-sidebar-nav-list is-code">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline">
                    Timeline
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a
                    className="rn-fw-sidebar-nav-link"
                    href="#timeline-today-marker"
                  >
                    TimelineTodayMarker
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-side">
                    TimelineSide
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-months">
                    TimelineMonths
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-weeks">
                    TimelineWeeks
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-days">
                    TimelineDays
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-rows">
                    TimelineRows
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-row">
                    TimelineRow
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-events">
                    TimelineEvents
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#timeline-event">
                    TimelineEvent
                  </a>
                </li>
              </ul>
            </section>

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">More Info</h4>
              <ul className="rn-fw-sidebar-nav-list">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#contributing">
                    Contributing
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#changelog">
                    Changelog
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#license">
                    License
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </div>
      </div>
      <div className="rn-fw-content">
        <div className="rn-fw-row" id="home">
          <div className="rn-fw-copy rn-fw-hero">
            <Badge color="action" colorVariant="solid">
              Framework
            </Badge>
            <h1 className="rn-fw-page-title">{mdx.frontmatter.title}</h1>
            <p className="rn-fw-page-lede">{mdx.frontmatter.description}</p>
          </div>
          <div className="rn-fw-code rn-fw-illustration">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 300">
              <g fill="none" fillRule="evenodd">
                <path fill="#12202B" d="M0-60h670v7804H0z" />
                <g>
                  <path fill="#12202B" d="M0 0h670v300H0z" />
                  <path
                    fill="#1C2D39"
                    d="M144 40h48v226h-48zM240 40h48v226h-48z"
                  />
                  <path
                    fill="#1C2D39"
                    opacity=".50439453"
                    d="M336 40h48v226h-48z"
                  />
                  <path
                    fill="#1C2D39"
                    opacity=".36502511"
                    d="M432 40h48v226h-48z"
                  />
                  <rect
                    fill="#5B73E6"
                    x="59"
                    y="159"
                    width="160"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#3A8FDD"
                    x="284"
                    y="159"
                    width="230"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#FC7576"
                    x="130"
                    y="79"
                    width="70"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#56DCE6"
                    x="299"
                    y="79"
                    width="110"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#D3B85F"
                    x="475"
                    y="79"
                    width="147"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#8FD57F"
                    x="252"
                    y="119"
                    width="190"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#AD89F1"
                    x="119"
                    y="199"
                    width="240"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#FC7576"
                    x="449"
                    y="199"
                    width="120"
                    height="20"
                    rx="2"
                  />
                  <rect
                    fill="#FFF"
                    x="441"
                    y="24"
                    width="2"
                    height="250"
                    rx="1"
                  />
                  <circle fill="#FFF" cx="442" cy="29" r="5" />
                  <circle fill="#FFF" cx="442" cy="269" r="5" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </section>
  )
}

FrameworkPageTemplate.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default FrameworkPageTemplate
