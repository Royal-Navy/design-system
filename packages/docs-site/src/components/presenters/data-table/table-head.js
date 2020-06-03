import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import DownArrowIcon from './images/DownArrowIcon'

const TableHead = ({ headings, onClickHeading }) => {
  return (
    <thead className="data-table__head">
      <tr>
        {headings.map((heading) => {
          return (
            <th key={uuidv4()} scope="col" className="data-table__heading">
              {heading}
              <button
                className="data-table__btn-sort"
                type="button"
                data-column={heading}
                onClick={onClickHeading}
                data-testid={`sort-${heading}`}
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
  headings: PropTypes.arrayOf(PropTypes.string),
  onClickHeading: PropTypes.func,
}

TableHead.defaultProps = {
  headings: [],
  onClickHeading: () => null,
}

export default TableHead
