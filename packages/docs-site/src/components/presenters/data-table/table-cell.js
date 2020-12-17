import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ column, content }) => {
  return (
    <td data-column={column} className="data-table__cell">
      <span dangerouslySetInnerHTML={{ __html: content || 'n/a' }} />
    </td>
  )
}

TableCell.propTypes = {
  column: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

TableCell.defaultProps = {
  content: 'n/a',
}

export default TableCell
