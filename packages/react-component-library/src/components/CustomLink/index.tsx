import React from 'react'

interface CustomLink {
  className?: string
  to: string
  label: string
}

const CustomLink: React.FC<CustomLink> = ({ className, to, label }) => (
  <div className={className}>
    &gt;&gt;&nbsp;<a href={to}>{label}</a>
  </div>
)

export default CustomLink
