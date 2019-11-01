import React, { FormEvent } from 'react'
import classNames from 'classnames'

export interface ButtonProps extends ComponentWithClass {
  children?: string
  color?: 'danger'
  disabled?: boolean
  icon?: React.ReactNode
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  size?: 'small' | 'regular' | 'large' | 'xlarge'
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  color,
  disabled,
  icon,
  onClick = () => {},
  size = 'regular',
  type = 'button',
  variant,
  ...rest
}) => {
  const classes = classNames('rn-btn', className, {
    'rn-btn--disabled': disabled,
    [`rn-btn--${variant}`]: variant,
    [`rn-btn--${color}`]: color,
    [`rn-btn--${size}`]: size,
  })

  return (
    <button
      className={classes}
      disabled={disabled}
      data-testid="rn-button"
      type={type}
      onClick={e => {
        e.currentTarget.blur()
        onClick(e)
      }}
      {...rest}
    >
      <span>{children}</span>
      {icon && <span className="rn-btn__icon">{icon}</span>}
    </button>
  )
}

Button.displayName = 'Button'
