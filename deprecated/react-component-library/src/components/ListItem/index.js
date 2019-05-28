import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ children, title, type }) => (
  <li className={`rn-list__item ${type}`}>
    {title && <h4 className="title">{title}</h4>}
    {children}
  </li>
)

ListItem.propTypes = {
  /** The content of the component */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
  /** The title of the listItem */
  title: PropTypes.string,
  /** The type of list item */
  type: PropTypes.string,
}

ListItem.defaultProps = {
  children: null,
  title: null,
  type: null,
}

export default ListItem
