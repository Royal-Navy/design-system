import React from 'react'
import { IconClose } from '@royalnavy/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import { InlineButton } from './InlineButton'

interface InlineButtonProps {
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ClearButton = ({ isDisabled, ...rest }: InlineButtonProps) => (
  <InlineButton
    aria-label="Clear value"
    data-testid="select-clear-button"
    isDisabled={isDisabled}
    size={COMPONENT_SIZE.FORMS}
    {...rest}
  >
    <IconClose size={18} />
  </InlineButton>
)

ClearButton.displayName = 'ClearButton'
