import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'uuid'
import getSlugsWithData from '../../helpers/js/getSlugsWithData'
import './sidebar.scss'

// SIDEBAR COMPONENT
// Note: This is only able to go down one additional level from the top.

// REFACTOR: There is almost certainly a better way to do this

const Sidebar = ({ context }) => (
  <StaticQuery
    query={graphql`
      query Sidebar {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                status
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Get data from query and put in alphabetical order
      const slugsWithData = getSlugsWithData(
        data.allMarkdownRemark.edges,
        context
      ).sort((a, b) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
      })
      const re = new RegExp(`/${context}/(.*)`)
      // Get only the unique items from a list.
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index
      }
      // Strip the context from the data so only the slugs remain
      const slugsNoContext = slugsWithData
        .map(slug => {
          const fullSlug = slug.slug.match(re)[1].split('/')
          if (fullSlug.length > 2) {
            return fullSlug[0]
          }
          return null
        })
        .filter(onlyUnique)
      return (
        <nav className="sidebar">
          <ul key={uuid()}>
            {slugsWithData.map(t => {
              // Remove context from slug results and split into an array (filtering out empty elements)
              const slugNoContext = t.slug
                .match(re)[1]
                .split('/')
                .filter(el => el !== '')
              // Top level links should display without a header
              if (slugNoContext.length === 1 && t.status !== 'draft') {
                return (
                  <li key={uuid()}>
                    <Link
                      className="sidebar__link"
                      activeClassName="active"
                      to={t.slug}
                    >
                      {t.title}
                    </Link>
                  </li>
                )
              }
              return null
            })}
            {slugsNoContext.map(slug => {
              if (slug !== null && slug.status !== 'draft') {
                // Ignore the first round as this will be unfiltered list items
                // REFACTOR: This is a bit hacky and can probably be written better.
                return (
                  <li key={uuid()}>
                    <h2 className="sidebar__title">{slug}</h2>
                    <ul key={uuid()}>
                      {getSlugsWithData(data.allMarkdownRemark.edges, slug).map(
                        l2 => {
                          if (l2.slug.match(re)) {
                            const trimmed = l2.slug
                              .replace(context, '')
                              .split('/')
                              .filter(Boolean)
                            if (trimmed.length >= 2 && l2.status !== 'draft') {
                              return (
                                <li key={uuid()}>
                                  <Link
                                    className="sidebar__link"
                                    activeClassName="active"
                                    to={l2.slug}
                                  >
                                    {l2.title}
                                  </Link>
                                </li>
                              )
                            }
                            return null
                          }
                          return null
                        }
                      )}
                    </ul>
                  </li>
                )
              }
              return null
            })}
          </ul>
        </nav>
      )
    }}
  />
)

Sidebar.propTypes = {
  context: PropTypes.string,
}

Sidebar.defaultProps = {
  context: '/',
}

export default Sidebar
