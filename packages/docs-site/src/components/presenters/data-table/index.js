import React from 'react'
import PropTypes from 'prop-types'

import './data-table.scss'

import TableHead from './table-head'
import TableBody from './table-body'

function headings(data) {
  return data.length > 1 ? Object.keys(data[0]) : []
}

const DataTable = ({ data }) => {
  return (
    <table className="data-table">
      <TableHead headings={headings(data)} />
      <TableBody rows={data} />
    </table>
  )
}

DataTable.propTypes = {
  data: PropTypes.instanceOf(Array),
}

DataTable.defaultProps = {
  data: [],
}

export default DataTable
