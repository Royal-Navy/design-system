import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import TableRow from './table-row'

const TableBody = ({ rows }) => {
  return (
    <tbody className="data-table__body">
      {rows.map((row) => {
        return <TableRow key={uuidv4()} cells={row} />
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  rows: PropTypes.instanceOf(Array),
}

TableBody.defaultProps = {
  rows: [],
}

export default TableBody
