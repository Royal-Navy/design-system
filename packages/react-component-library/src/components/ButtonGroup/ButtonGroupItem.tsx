import React, { FormEvent } from 'react'

import { Button, BUTTON_SIZE } from '../Button'

export interface ButtonGroupItemProps {
  children: string
  isDisabled?: boolean
  icon?: React.ReactNode
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  size?:
    | typeof BUTTON_SIZE.LARGE
    | typeof BUTTON_SIZE.REGULAR
    | typeof BUTTON_SIZE.SMALL
    | typeof BUTTON_SIZE.XLARGE
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
