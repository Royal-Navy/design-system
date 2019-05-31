import React from 'react'

interface CustomLink {
  className?: string
  to: string
}

const CustomLink: React.FC<CustomLink> = ({ children, className, to }) => (
  <div className={className}>
    &gt;&gt;&nbsp;<a href={to}>{children}</a>
  </div>
)

export default CustomLink
