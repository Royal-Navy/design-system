import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import DownArrowIcon from './down-arrow-icon.svg'

const TableHead = ({ headings, onClickHeading }) => {
  return (
    <thead className="data-table__head">
      <tr>
        {headings.map(heading => {
          return (
            <th key={uuid()} scope="col" className="data-table__heading">
              {heading}
              <button
                className="data-table__btn-sort"
                type="button"
                data-column={heading}
                onClick={onClickHeading}
              >
                <DownArrowIcon />
              </button>
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

TableHead.propTypes = {
  headings: PropTypes.instanceOf(Array),
  onClickHeading: PropTypes.instanceOf(Function),
}

TableHead.defaultProps = {
  headings: [],
  onClickHeading: () => {},
}

export default TableHead
