import React from 'react'
import capitalize from 'lodash/capitalize'
import { IconAdd, IconRemove } from '@defencedigital/icon-library'

import { ComponentSizeType } from '../Forms'
import { InlineButton } from '../InlineButtons/InlineButton'
import { NUMBER_INPUT_BUTTON_TYPE } from './constants'
import { StyledDivider } from './partials/StyledDivider'
import { StyledInlineButtons } from '../InlineButtons/partials/StyledInlineButtons'
import { countDecimals } from '../../helpers'

export interface ButtonsProps {
  isDisabled: boolean
  max?: number
  min?: number
  name: string
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: string
  ) => void
  size: ComponentSizeType
  step?: number
  value: string
}

const iconLookup = {
  [NUMBER_INPUT_BUTTON_TYPE.DECREASE]: <IconRemove size={18} />,
  [NUMBER_INPUT_BUTTON_TYPE.INCREASE]: <IconAdd size={18} />,
}

export const Buttons: React.FC<ButtonsProps> = ({
  isDisabled,
  onClick,
  size,
  step,
  value,
}) => {
  const digits = countDecimals(step)

  function onButtonClick(getNewValue: () => string) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const newValue = getNewValue()
      onClick(event, newValue)
    }
  }

  return (
    <StyledInlineButtons>
      <InlineButton
        aria-label={`${capitalize(
          NUMBER_INPUT_BUTTON_TYPE.DECREASE
        )} the input value`}
        data-testid={`number-input-${NUMBER_INPUT_BUTTON_TYPE.DECREASE}`}
        isDisabled={isDisabled}
        onClick={onButtonClick(() =>
          ((parseFloat(value) || 0) - step).toFixed(digits)
        )}
        size={size}
      >
        {iconLookup[NUMBER_INPUT_BUTTON_TYPE.DECREASE]}
      </InlineButton>
      <StyledDivider $size={size} />
      <InlineButton
        aria-label={`${capitalize(
          NUMBER_INPUT_BUTTON_TYPE.INCREASE
        )} the input value`}
        data-testid={`number-input-${NUMBER_INPUT_BUTTON_TYPE.INCREASE}`}
        isDisabled={isDisabled}
        onClick={onButtonClick(() =>
          ((parseFloat(value) || 0) + step).toFixed(digits)
        )}
        size={size}
      >
        {iconLookup[NUMBER_INPUT_BUTTON_TYPE.INCREASE]}
      </InlineButton>
    </StyledInlineButtons>
  )
}

Buttons.displayName = 'Buttons'
