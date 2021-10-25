import React from 'react'

import { ComponentSizeType } from '../Forms'
import { InlineButton } from './InlineButton'
import { NUMBER_INPUT_BUTTON_TYPE } from './constants'
import { StyledInlineButtons } from './partials/StyledInlineButtons'
import { StyledDivider } from './partials/StyledDivider'

export interface ButtonsProps {
  isDisabled: boolean
  max?: number
  min?: number
  name: string
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: number
  ) => void
  size: ComponentSizeType
  step?: number
  value: number
}

export const Buttons: React.FC<ButtonsProps> = ({
  isDisabled,
  onClick,
  size,
  step,
  value,
}) => {
  function onButtonClick(getNewValue: () => number) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const target = event.currentTarget
      target.blur()

      const newValue = getNewValue()
      onClick(event, newValue)
    }
  }

  return (
    <StyledInlineButtons $isDisabled={isDisabled}>
      <InlineButton
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) - step)}
        size={size}
        type={NUMBER_INPUT_BUTTON_TYPE.DECREASE}
      />
      <StyledDivider $size={size} />
      <InlineButton
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) + step)}
        size={size}
        type={NUMBER_INPUT_BUTTON_TYPE.INCREASE}
      />
    </StyledInlineButtons>
  )
}

Buttons.displayName = 'Buttons'
