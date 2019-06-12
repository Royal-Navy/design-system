import React from 'react'
import PropTypes from 'prop-types'

const TableHead = ({ headings }) => {
  return (
    <thead className="data-table__head">
      <tr>
        {headings.map(heading => {
          return <th className="data-table__heading">{heading}</th>
        })}
      </tr>
    </thead>
  )
}

TableHead.propTypes = {
  headings: PropTypes.instanceOf(Array),
}

TableHead.defaultProps = {
  headings: [],
}

export default TableHead
