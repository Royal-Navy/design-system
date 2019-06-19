import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import TableRow from './table-row'

const TableBody = ({ rows }) => {
  return (
    <tbody className="data-table__body">
      {rows.map(row => {
        return <TableRow key={uuid()} cells={row} />
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
