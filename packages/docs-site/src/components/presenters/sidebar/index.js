import React from 'react'
import PropTypes from 'prop-types'

import './sidebar.scss'

import { Nav } from '@royalnavy/react-component-library'

const Sidebar = ({ navigation }) => (
  <Nav
    className="sidebar"
    navItems={navigation}
    orientation="vertical"
    size="regular"
  />
)

Sidebar.propTypes = {
  navigation: PropTypes.instanceOf(Array),
}

Sidebar.defaultProps = {
  navigation: [],
}

export default Sidebar
