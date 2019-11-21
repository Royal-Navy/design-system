import React from 'react'

interface TabItemProps {
  onClick: () => void
  isActive: boolean
  index: number
  children: string
}

export const TabItem: React.FC<TabItemProps> = ({
  index,
  isActive,
  onClick,
  children,
}) => {
  const classes = `rn-tab-set__tab-item ${isActive ? 'is-active' : ''}`
  return (
    <li className={classes} data-testid="tab">
      <button
        className="rn-tab-set__tab"
        onClick={onClick}
        data-testid={`select-tab-${index}`}
      >
        {children}
      </button>
    </li>
  )
}
