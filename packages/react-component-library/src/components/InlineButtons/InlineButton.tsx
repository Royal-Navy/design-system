import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { COMPONENT_SIZE, ComponentSizeType } from '../Forms'
import { StyledInlineButton } from './partials/StyledInlineButton'
import { StyledIconWrapper } from './partials/StyledIconWrapper'

export interface InlineButtonProps extends ComponentWithClass {
  hasHover?: boolean
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: ComponentSizeType
}

export const InlineButton = React.forwardRef<
  HTMLButtonElement,
  InlineButtonProps
>(
  (
    { children, hasHover, isDisabled, size = COMPONENT_SIZE.FORMS, ...rest },
    ref
  ) => {
    return (
      <StyledInlineButton
        $hasHover={hasHover}
        $size={size}
        disabled={isDisabled}
        ref={ref}
        type="button"
        {...rest}
      >
        <StyledIconWrapper data-testid="icon-wrapper" $size={size}>
          {children}
        </StyledIconWrapper>
      </StyledInlineButton>
    )
  }
)

InlineButton.displayName = 'InlineButton'
