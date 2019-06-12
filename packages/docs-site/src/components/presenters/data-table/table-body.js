import React from 'react'
import PropTypes from 'prop-types'

import TableRow from './table-row'

const TableBody = ({ data }) => {
  return (
    <tbody className="data-table__body">
      {data.map(row => {
        return <TableRow cells={row} />
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.instanceOf(Array),
}

TableBody.defaultProps = {
  data: [],
}

export default TableBody
