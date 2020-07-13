import React, { FormEvent } from 'react'
import classNames from 'classnames'

import {
  BUTTON_COLOR,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BUTTON_ICON_POSITION,
} from './constants'

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
  children?: string
  color?: typeof BUTTON_COLOR.DANGER
  isDisabled?: boolean
  icon?: React.ReactNode
  iconPosition?: ButtonIconPositionType
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  size?: ButtonSizeType
  type?: 'button' | 'submit'
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
  const classes = classNames('rn-btn', className, {
    'rn-btn--disabled': isDisabled,
    [`rn-btn--icon-${iconPosition}`]: icon,
    [`rn-btn--${variant}`]: variant,
    [`rn-btn--${color}`]: color,
    [`rn-btn--${size}`]: size,
  })

  return (
    <button
      className={classes}
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
      <span className="rn-btn__text">{children}</span>
      {icon && (
        <span className="rn-btn__icon" data-testid="button-icon">
          {icon}
        </span>
      )}
    </button>
  )
}

Button.displayName = 'Button'
