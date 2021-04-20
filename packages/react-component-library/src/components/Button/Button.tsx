import React, { FormEvent } from 'react'

import {
  BUTTON_COLOR,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BUTTON_ICON_POSITION,
} from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledButton } from './partials/StyledButton'
import { StyledIcon } from './partials/StyledIcon'
import { StyledText } from './partials/StyledText'

export type ButtonSizeType =
  | typeof BUTTON_SIZE.SMALL
  | typeof BUTTON_SIZE.REGULAR
  | typeof BUTTON_SIZE.LARGE
  | typeof BUTTON_SIZE.XLARGE

export type ButtonVariantType =
  | typeof BUTTON_VARIANT.PRIMARY
  | typeof BUTTON_VARIANT.SECONDARY
  | typeof BUTTON_VARIANT.TERTIARY

export type ButtonIconPositionType =
  | typeof BUTTON_ICON_POSITION.LEFT
  | typeof BUTTON_ICON_POSITION.RIGHT

export interface ButtonProps extends ComponentWithClass {
  /**
   * Text to display within the component.
   */
  children?: string
  /**
   * Custom color variant of the component (only default and `danger` is currently supported).
   */
  color?: typeof BUTTON_COLOR.DANGER
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Optional icon to display beside the component text.
   */
  icon?: React.ReactNode
  /**
   * Position of the optional icon.
   */
  iconPosition?: ButtonIconPositionType
  /**
   * Optional handler called when the component is clicked.
   */
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  /**
   * Size of the component.
   */
  size?: ButtonSizeType
  /**
   * HTML type of the component (forms should use the `submit` type).
   */
  type?: 'button' | 'submit'
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: ButtonVariantType
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  isDisabled,
  icon,
  iconPosition = BUTTON_ICON_POSITION.RIGHT,
  onClick,
  size = BUTTON_SIZE.REGULAR,
  type = 'button',
  variant,
  ...rest
}) => {
  return (
    <StyledButton
      className={className}
      $disabled={isDisabled}
      $variant={variant}
      $color={color}
      $size={size}
      $iconPosition={iconPosition}
      data-testid="button"
      disabled={isDisabled}
      type={type}
      onClick={(e) => {
        e.currentTarget.blur()

        if (onClick) {
          onClick(e)
        }
      }}
      {...rest}
    >
      <StyledText>{children}</StyledText>
      {icon && (
        <StyledIcon aria-hidden data-testid="button-icon">
          {icon}
        </StyledIcon>
      )}
    </StyledButton>
  )
}

Button.displayName = 'Button'
