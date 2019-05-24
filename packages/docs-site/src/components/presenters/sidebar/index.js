import React from 'react'
import PropTypes from 'prop-types'

import './sidebar.scss'

/**
 * Recursively render a nested list using JSX.
 *
 * @param {array} pages
 * @returns {jsx}
 */
function renderList(pages) {
  return (
    <ul>
      {pages.map(page => {
        const { slug } = page.node.fields
        const { title } = page.node.frontmatter

        let subMenu

        if (page.children && page.children.length > 0) {
          subMenu = renderList(page.children)
        }

        return (
          <li key={slug}>
            <a href={slug}>
              <span>{title}</span>
            </a>
            {subMenu}
          </li>
        )
      })}
    </ul>
  )
}

const Sidebar = ({ navigation }) => (
  <nav>
    {renderList(navigation)}
    <pre>{JSON.stringify(navigation, null, 2)}</pre>
  </nav>
)

Sidebar.propTypes = {
  navigation: PropTypes.instanceOf(Array),
}

Sidebar.defaultProps = {
  navigation: [],
}

export default Sidebar
