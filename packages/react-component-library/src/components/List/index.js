import React from 'react'
import PropTypes from 'prop-types'

const List = ({ children }) => <ul className="rn-list">{children}</ul>

List.propTypes = {
  /** The content of the component */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
}

List.defaultProps = {
  children: null,
}

export default List
