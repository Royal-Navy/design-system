import React, { FormEvent } from 'react'
import classNames from 'classnames'

import { Button } from '../Button'

export interface ButtonGroupItem {
  disabled?: boolean
  icon?: React.ReactNode
  label: string
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
}

export interface ButtonGroupProps {
  className?: string
  items: ButtonGroupItem[]
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  items,
  size = 'regular',
}) => {
  const classes = classNames('rn-btn-group', className, {
    [`rn-btn-group--${size}`]: size,
  })

  return (
    <div className={classes} data-testid="rn-buttongroup">
      {items.map(({ disabled, icon, label, onClick }) => (
        <Button
          disabled={disabled}
          icon={icon}
          key={label}
          onClick={onClick}
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

ButtonGroup.displayName = 'ButtonGroup'
