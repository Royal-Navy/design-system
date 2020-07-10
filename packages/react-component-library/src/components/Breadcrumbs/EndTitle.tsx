import React from 'react'

export const EndTitle: React.FC = ({ children }) => (
  <span
    className="rn-breadcrumbs__title"
    aria-current="page"
    data-testid="breadcrumb-end-title"
  >
    {children}
  </span>
)

EndTitle.displayName = 'EndTitle'
