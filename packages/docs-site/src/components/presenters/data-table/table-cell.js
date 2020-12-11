import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ column, content }) => (
  <td data-column={column} className="data-table__cell">
    <span>{content || 'n/a'}</span>
  </td>
)

TableCell.propTypes = {
  column: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

TableCell.defaultProps = {
  content: 'n/a',
}

export default TableCell
