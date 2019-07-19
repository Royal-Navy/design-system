import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ caption, headings, tableData }) => (
  <table className="rn-table">
    {headings && (
      <thead>
        {headings.map(item => (
          <th key={item}>{item}</th>
        ))}
      </thead>
    )}
    <tbody>
      {tableData.map(row => (
        <tr>
          {row.map(cell => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
    {caption && <caption className="rn-table__caption">{caption}</caption>}
  </table>
)

Table.propTypes = {
  /** The table caption */
  caption: PropTypes.string,
  /** The headings of the table */
  headings: PropTypes.arrayOf(PropTypes.string),
  /** The data of the table */
  tableData: PropTypes.arrayOf(PropTypes.array).isRequired,
}

Table.defaultProps = {
  caption: null,
  headings: null,
}

export default Table
