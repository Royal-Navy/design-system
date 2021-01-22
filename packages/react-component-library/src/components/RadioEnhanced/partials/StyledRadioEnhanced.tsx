import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledRadio } from '../../Radio/partials/StyledRadio'
import { StyledInput } from '../../Radio/partials/StyledInput'
import { StyledCheckmark } from '../../Radio/partials/StyledCheckmark'
import { StyledLabel } from '../../Radio/partials/StyledLabel'

interface StyledRadioEnhancedProps {
  $isSelected?: boolean
}

const { spacing, color, animation, fontSize } = selectors

const RADIO_FOCUS_WIDTH = '0.1rem'

export const StyledRadioEnhanced = styled.div<StyledRadioEnhancedProps>`
  display: inline-flex;
  flex-direction: column;
  width: 22rem;
  padding: ${spacing('10')};
  margin: ${spacing('4')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '100')};
  outline: none;

  * {
    cursor: pointer;
  }

  &:hover {
    border-color: ${color('action', '400')};
    box-shadow: 0 0 0 3px ${color('action', '100')};
    cursor: pointer;

    ${StyledRadio} ${StyledInput} ~ ${StyledCheckmark} {
      border: 1px solid ${color('action', '500')};
      outline: none;
      box-shadow: 0 0 0 ${RADIO_FOCUS_WIDTH} ${color('action', '500')};
      transition: all ${animation('default')};
    }
  }

  ${StyledLabel} {
    font-size: ${fontSize('m')};
    color: ${color('neutral', '500')};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-color: ${color('action', '400')};
    `}
`
