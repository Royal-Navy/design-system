import React from 'react'

interface FootnoteProps {
  children?: string
}

export const Footnote: React.FC<FootnoteProps> = ({ children }) => {
  return children ? (
    <small
      className="rn-numberinput__footnote"
      data-testid="number-input-footnote"
    >
      {children}
    </small>
  ) : null
}

Footnote.displayName = 'Footnote'
