import React from 'react'
import classNames from 'classnames'

import { Button } from '../Button'

export interface ButtonGroupItem {
  disabled?: boolean
  icon?: React.ReactNode
  label: string
  value: string | number
}

export interface ButtonClickEvent {
  target: {
    name: string
    value: string | number
  }
}

export interface ButtonGroupProps {
  className?: string
  items: ButtonGroupItem[]
  name: string
  onClick: (item: ButtonClickEvent) => void
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  items,
  name,
  onClick,
  size = 'regular',
}) => {
  const classes = classNames('rn-btn-group', className, {
    [`rn-btn-group--${size}`]: size,
  })

  return (
    <div className={classes} data-testid="rn-buttongroup">
      {items.map(({ disabled, icon, label, value }) => (
        <Button
          disabled={disabled}
          icon={icon}
          key={value}
          onClick={() => onClick({ target: { name, value } })}
          size={size}
          type="button"
          variant="secondary"
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
