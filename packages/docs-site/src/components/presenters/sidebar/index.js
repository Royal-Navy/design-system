import React from 'react'
import PropTypes from 'prop-types'

import './sidebar.scss'

import { Nav } from '@royalnavy/react-component-library'

const Sidebar = ({ navigation, title }) => (
  <aside className="sidebar">
    {title && (
      <span data-testid="title" className="sidebar__title">
        {title}
      </span>
    )}
    <Nav navItems={navigation} orientation="vertical" size="large" />
  </aside>
)

Sidebar.propTypes = {
  navigation: PropTypes.instanceOf(Array),
  title: PropTypes.string,
}

Sidebar.defaultProps = {
  navigation: [],
  title: '',
}

export default Sidebar
