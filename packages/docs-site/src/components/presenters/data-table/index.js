import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'lodash/sortBy'

import './data-table.scss'

import TableHead from './table-head'
import TableBody from './table-body'

function extractHeadings(data) {
  return data.length >= 1 ? Object.keys(data[0]) : []
}

const DataTable = ({ data, caption }) => {
  const [tableData, setTableData] = useState(JSON.parse(atob(data)))

  const sortByColumn = useCallback(
    e => {
      const column = e.target.getAttribute('data-column')
      setTableData(sortBy(JSON.parse(atob(data)), column))
    },
    [tableData]
  )

  return (
    <table className="data-table">
      {caption && (
        <caption className="data-table__caption" data-testid="caption">
          {caption}
        </caption>
      )}
      <TableHead
        headings={extractHeadings(tableData)}
        onClickHeading={sortByColumn}
      />
      <TableBody rows={tableData} />
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
