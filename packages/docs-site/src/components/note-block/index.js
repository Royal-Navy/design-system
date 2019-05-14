import PropTypes from 'prop-types'
import React from 'react'

import './note-block.scss'

const NoteBlock = ({ children, className }) => (
  <section className={`note-block ${className}`}>{children}</section>
)

NoteBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Array).isRequired,
}

NoteBlock.defaultProps = {
  className: null,
}

export default NoteBlock
