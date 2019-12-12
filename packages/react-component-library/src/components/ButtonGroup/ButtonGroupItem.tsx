import React, { FormEvent } from 'react'
import { Button } from '../Button'

export interface ButtonGroupItemProps {
  children: string
  isDisabled?: boolean
  icon?: React.ReactNode
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
  children,
  isDisabled,
  icon,
  onClick,
  size,
}) => (
  <Button
    isDisabled={isDisabled}
    icon={icon}
    key={children}
    onClick={onClick}
    type="button"
    variant="secondary"
    size={size}
  >
    {children}
  </Button>
)
