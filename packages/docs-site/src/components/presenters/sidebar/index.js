import React from 'react'
import PropTypes from 'prop-types'

import './sidebar.scss'

import { Nav } from '@royalnavy/react-component-library'

const Sidebar = ({ className, navigation, title }) => (
  <aside data-testid="wrapper" className={`sidebar ${className}`}>
    {title && (
      <span data-testid="title" className="sidebar__title">
        {title}
      </span>
    )}
    <Nav navItems={navigation} orientation="vertical" size="large" />
  </aside>
)

Sidebar.propTypes = {
  className: PropTypes.string,
  navigation: PropTypes.instanceOf(Array),
  title: PropTypes.string,
}

Sidebar.defaultProps = {
  navigation: [],
  title: '',
  className: '',
}

export default Sidebar
