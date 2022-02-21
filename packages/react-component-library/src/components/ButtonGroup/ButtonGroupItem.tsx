import React, { FormEvent } from 'react'

import { ComponentSizeType } from '../Forms'
import { Button } from '../Button'

export interface ButtonGroupItemProps {
  /**
   * Text to display within the component.
   */
  children: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Optional icon to display beside the component text.
   */
  icon?: React.ReactNode
  /**
   * Optional handler called when the component is clicked.
   */
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  /**
   * Size of the component.
   */
  size?: ComponentSizeType
}

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
  children,
  isDisabled,
  icon,
  onClick,
  size,
  ...rest
}) => (
  <Button
    isDisabled={isDisabled}
    icon={icon}
    key={children}
    onClick={onClick}
    type="button"
    variant="secondary"
    size={size}
    {...rest}
  >
    {children}
  </Button>
)
