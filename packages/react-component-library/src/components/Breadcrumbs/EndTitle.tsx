import React from 'react'

export const EndTitle: React.FC = ({ children }) => (
  <span className="rn-breadcrumbs__title" data-testid="end-title">
    {children}
  </span>
)

EndTitle.displayName = 'EndTitle'
