import React from 'react'
import PropTypes from 'prop-types'

import TableCell from './table-cell'

const TableRow = ({ cells }) => {
  return (
    <tr className="data-table__row">
      {cells.map(cell => {
        return <TableCell content={cell} />
      })}
    </tr>
  )
}

TableRow.propTypes = {
  cells: PropTypes.instanceOf(Array),
}

TableRow.defaultProps = {
  cells: [],
}

export default TableRow
