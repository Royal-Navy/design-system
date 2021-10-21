import React, { FormEvent } from 'react'

import {
  BUTTON_E_SIZE,
  BUTTON_E_VARIANT,
  BUTTON_E_ICON_POSITION,
} from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledButton } from './partials/StyledButton'
import { StyledIcon } from './partials/StyledIcon'
import { StyledText } from './partials/StyledText'

export type ButtonESizeType =
  | typeof BUTTON_E_SIZE.SMALL
  | typeof BUTTON_E_SIZE.FORMS

export type ButtonEVariantType =
  | typeof BUTTON_E_VARIANT.PRIMARY
  | typeof BUTTON_E_VARIANT.SECONDARY
  | typeof BUTTON_E_VARIANT.TERTIARY
  | typeof BUTTON_E_VARIANT.DANGER

export type ButtonEIconPositionType =
  | typeof BUTTON_E_ICON_POSITION.LEFT
  | typeof BUTTON_E_ICON_POSITION.RIGHT

interface ButtonEBaseProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Position of the optional icon.
   */
  iconPosition?: ButtonEIconPositionType
  /**
   * Toggles whether the component is disabled or not (preventing user
   * interaction).
   */
  isDisabled?: boolean
  /**
   * Optional handler called when the component is clicked.
   */
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  /**
   * Size of the component.
   */
  size?: ButtonESizeType
  /**
   * HTML type of the component (forms should use the `submit` type).
   */
  type?: 'button' | 'submit'
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: ButtonEVariantType
}

export interface ButtonEWithTextProps extends ButtonEBaseProps {
  /**
   * Text to display within the component.
   */
  children: string
  /**
   * Optional icon to display beside the component text.
   */
  icon?: React.ReactNode
  /**
   * Value for the HTML title attribute. Should be set for
   * icon-only buttons to make them accessible.
   */
  title?: string
}

export interface ButtonEWithIconOnlyProps extends ButtonEBaseProps {
  children?: never
  icon: React.ReactNode
  title: string
}

export type ButtonEProps = ButtonEWithTextProps | ButtonEWithIconOnlyProps

export const ButtonE: React.FC<ButtonEProps> = ({
  children,
  className,
  isDisabled,
  icon,
  iconPosition = BUTTON_E_ICON_POSITION.RIGHT,
  onClick,
  size = BUTTON_E_SIZE.FORMS,
  title,
  type = 'button',
  variant = BUTTON_E_VARIANT.PRIMARY,
  ...rest
}) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      $size={size}
      $iconPosition={iconPosition}
      data-testid="button"
      disabled={isDisabled}
      type={type}
      title={title}
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
        <StyledIcon
          $iconPosition={iconPosition}
          $buttonHasText={Boolean(children)}
          $buttonSize={size}
          aria-hidden
          data-testid="button-icon"
        >
          {icon}
        </StyledIcon>
      )}
    </StyledButton>
  )
}

ButtonE.displayName = 'ButtonE'
