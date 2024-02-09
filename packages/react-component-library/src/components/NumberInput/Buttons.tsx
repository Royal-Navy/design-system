import React from 'react'
import capitalize from 'lodash/capitalize'
import { IconAdd, IconRemove } from '@royalnavy/icon-library'
import { Decimal } from 'decimal.js'

import { ComponentSizeType } from '../Forms'
import { InlineButton } from '../InlineButtons/InlineButton'
import { NUMBER_INPUT_BUTTON_TYPE } from './constants'
import { StyledDivider } from './partials/StyledDivider'
import { StyledInlineButtons } from '../InlineButtons/partials/StyledInlineButtons'

export interface ButtonsProps {
  isDisabled: boolean
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: string
  ) => void
  size: ComponentSizeType
  step: number
  value: string | null
}

const iconLookup = {
  [NUMBER_INPUT_BUTTON_TYPE.DECREASE]: <IconRemove size={18} />,
  [NUMBER_INPUT_BUTTON_TYPE.INCREASE]: <IconAdd size={18} />,
}

export const Buttons = ({
  isDisabled,
  onClick,
  size,
  step,
  value,
}: ButtonsProps) => {
  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
    isDecrease: boolean
  ) {
    // Do nothing if the value is e.g. only `-`
    if (value && !Number.isFinite(parseFloat(value))) {
      return
    }

    const decimal = new Decimal(value || 0)
    const newValue = (
      isDecrease ? decimal.minus(step) : decimal.plus(step)
    ).toString()

    onClick(event, newValue)
  }

  return (
    <StyledInlineButtons>
      <InlineButton
        aria-label={`${capitalize(
          NUMBER_INPUT_BUTTON_TYPE.DECREASE
        )} the input value`}
        data-testid={`number-input-${NUMBER_INPUT_BUTTON_TYPE.DECREASE}`}
        isDisabled={isDisabled}
        onClick={(event) => handleClick(event, true)}
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
        onClick={(event) => handleClick(event, false)}
        size={size}
      >
        {iconLookup[NUMBER_INPUT_BUTTON_TYPE.INCREASE]}
      </InlineButton>
    </StyledInlineButtons>
  )
}

Buttons.displayName = 'Buttons'
