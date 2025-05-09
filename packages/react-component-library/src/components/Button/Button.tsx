import { IconLoader } from '@royalnavy/icon-library'
import React from 'react'

import { BUTTON_ICON_POSITION, BUTTON_VARIANT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import {
  StyledButton,
  StyledIconLoaderWrapper,
  StyledIconWrapper,
  StyledText,
} from './partials'
import { COMPONENT_SIZE, ComponentSizeType } from '../Forms'
import { ValueOf } from '../../helpers'

export type ButtonVariantType = ValueOf<typeof BUTTON_VARIANT>

export type ButtonIconPositionType = ValueOf<typeof BUTTON_ICON_POSITION>

interface ButtonBaseProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Position of the optional icon.
   */
  iconPosition?: ButtonIconPositionType
  /**
   * Toggles whether the component is disabled or not (preventing user
   * interaction).
   */
  isDisabled?: boolean
  /**
   * Whether an operation is in progress and the button temporarily can't be
   * used. If set, the button will be disabled and a loading icon displayed in
   * place of the button text.
   */
  isLoading?: boolean
  /**
   * Whether to show the button text when in a loading state. Defaults to false.
   */
  showLoadingText?: boolean
  /**
   * Optional handler called when the component is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
  /**
   * Size of the component.
   */
  size?: ComponentSizeType
  /**
   * HTML type of the component (forms should use the `submit` type).
   */
  type?: 'button' | 'submit'
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: ButtonVariantType
}

export interface ButtonWithTextProps extends ButtonBaseProps {
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

export interface ButtonWithIconOnlyProps extends ButtonBaseProps {
  children?: never
  icon: React.ReactNode
  title: string
}

export type ButtonProps = ButtonWithTextProps | ButtonWithIconOnlyProps

export const Button = ({
  children,
  className,
  isDisabled,
  isLoading = false,
  icon,
  iconPosition = BUTTON_ICON_POSITION.RIGHT,
  onClick,
  size = COMPONENT_SIZE.FORMS,
  title,
  type = 'button',
  variant = BUTTON_VARIANT.PRIMARY,
  showLoadingText = false,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      $size={size}
      $iconPosition={iconPosition}
      $showLoadingText={showLoadingText}
      data-testid="button"
      disabled={isDisabled || isLoading}
      type={type}
      aria-label={children}
      title={title}
      onClick={onClick}
      {...rest}
    >
      {isLoading && (
        <StyledIconLoaderWrapper
          data-testid="loading-icon"
          aria-hidden
          $showLoadingText={showLoadingText}
        >
          <IconLoader size={size === COMPONENT_SIZE.FORMS ? 26 : 21} />
        </StyledIconLoaderWrapper>
      )}
      <StyledText $isLoading={isLoading} $showLoadingText={showLoadingText}>
        {children}
      </StyledText>
      {icon && (
        <StyledIconWrapper
          $buttonHasText={Boolean(children)}
          $buttonSize={size}
          $iconPosition={iconPosition}
          $isLoading={isLoading}
          aria-hidden
          data-testid="button-icon"
        >
          {icon}
        </StyledIconWrapper>
      )}
    </StyledButton>
  )
}

Button.displayName = 'Button'
