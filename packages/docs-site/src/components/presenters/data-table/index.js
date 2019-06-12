import React from 'react'
import PropTypes from 'prop-types'

import './data-table.scss'

import TableHead from './table-head'
import TableBody from './table-body'

function headings(data) {
  return data.length > 1 ? Object.keys(data[0]) : []
}

const DataTable = ({ data, caption }) => {
  return (
    <table className="data-table">
      <caption className="data-table__caption">{caption}</caption>
      <TableHead headings={headings(data)} />
      <TableBody rows={data} />
    </table>
  )
}

DataTable.propTypes = {
  data: PropTypes.instanceOf(Array),
  caption: PropTypes.string,
}

DataTable.defaultProps = {
  data: [],
  caption: '',
}

export default DataTable
