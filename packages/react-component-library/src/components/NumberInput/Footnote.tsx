import React from 'react'

interface FootnoteProps {
  children?: string
}

export const Footnote: React.FC<FootnoteProps> = ({ children }) => {
  return children ? (
    <small data-testid="number-input-footnote">{children}</small>
  ) : null
}

Footnote.displayName = 'Footnote'
