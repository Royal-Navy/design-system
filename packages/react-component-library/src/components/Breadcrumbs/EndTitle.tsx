import React from 'react'

const Link: React.FC = ({ children }) => (
  <span className="rn-breadcrumbs__title" data-testid="end-title">
    {children}
  </span>
)

export default Link
