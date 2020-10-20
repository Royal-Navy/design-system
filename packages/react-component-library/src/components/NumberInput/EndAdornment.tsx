import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { EndAdornmentButton } from './EndAdornmentButton'
import { END_ADORNMENT_TYPE } from './constants'

const { color } = selectors

interface EndAdornmentProps {
  isCondensed: boolean
  isDisabled: boolean
  max?: number
  min?: number
  name: string
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: number
  ) => void
  step?: number
  value: number
}

const StyledNumberInputControls = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-left: 1px solid ${color('neutral', '100')};
`

export const EndAdornment: React.FC<EndAdornmentProps> = ({
  isCondensed,
  isDisabled,
  onClick,
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
    <StyledNumberInputControls>
      <EndAdornmentButton
        isCondensed={isCondensed}
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) + step)}
        type={END_ADORNMENT_TYPE.INCREASE}
      />
      <EndAdornmentButton
        isCondensed={isCondensed}
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) - step)}
        type={END_ADORNMENT_TYPE.DECREASE}
      />
    </StyledNumberInputControls>
  )
}

EndAdornment.displayName = 'EndAdornment'
