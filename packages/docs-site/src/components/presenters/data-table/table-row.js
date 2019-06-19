import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import TableCell from './table-cell'

const TableRow = ({ cells }) => {
  return (
    <tr className="data-table__row">
      {Object.values(cells).map((value, index) => {
        return (
          <TableCell
            key={uuid()}
            column={Object.keys(cells)[index]}
            content={value}
          />
        )
      })}
    </tr>
  )
}

TableRow.propTypes = {
  cells: PropTypes.instanceOf(Object).isRequired,
}

export default TableRow
