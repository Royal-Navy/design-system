import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ column, content }) => {
  return (
    <td data-column={column} className="data-table__cell">
      {content}
    </td>
  )
}

TableCell.propTypes = {
  column: PropTypes.string.isRequired,
  content: PropTypes.string,
}

TableCell.defaultProps = {
  content: '',
}

export default TableCell
