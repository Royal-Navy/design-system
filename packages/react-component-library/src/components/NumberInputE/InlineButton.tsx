import React from 'react'
import capitalize from 'lodash/capitalize'
import { IconAdd, IconRemove } from '@defencedigital/icon-library'

import { ComponentSizeType } from '../Forms'
import { NUMBER_INPUT_BUTTON_TYPE } from './constants'
import { StyledInlineButton } from './partials/StyledInlineButton'

type ButtonType =
  | typeof NUMBER_INPUT_BUTTON_TYPE.DECREASE
  | typeof NUMBER_INPUT_BUTTON_TYPE.INCREASE

interface InlineButtonProps {
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  size: ComponentSizeType
  type: ButtonType
}

const iconLookup = {
  [NUMBER_INPUT_BUTTON_TYPE.DECREASE]: <IconRemove />,
  [NUMBER_INPUT_BUTTON_TYPE.INCREASE]: <IconAdd />,
}

export const InlineButton: React.FC<InlineButtonProps> = ({
  isDisabled,
  onClick,
  size,
  type,
}) => (
  <StyledInlineButton
    $size={size}
    aria-label={`${capitalize(type)} the input value`}
    data-testid={`number-input-${type}`}
    type="button"
    disabled={isDisabled}
    onClick={onClick}
  >
    {iconLookup[type]}
  </StyledInlineButton>
)

InlineButton.displayName = 'InlineButton'
