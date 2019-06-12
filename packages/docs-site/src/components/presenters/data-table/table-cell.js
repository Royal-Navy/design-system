import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ content }) => {
  return <td className="data-table__cell">{content}</td>
}

TableCell.propTypes = {
  content: PropTypes.string,
}

TableCell.defaultProps = {
  content: '',
}

export default TableCell
