import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import TableCell from './table-cell'

const TableRow = ({ cells }) => (
  <tr className="data-table__row">
    {Object.values(cells).map((value, index) => (
      <TableCell
        key={uuidv4()}
        column={Object.keys(cells)[index]}
        content={value}
      />
    ))}
  </tr>
)

TableRow.propTypes = {
  cells: PropTypes.instanceOf(Object).isRequired,
}

export default TableRow
