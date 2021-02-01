import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledCheckmark } from '../../Checkbox/partials/StyledCheckmark'
import { StyledInput } from '../../Checkbox/partials/StyledInput'
import { StyledLabel } from '../../Checkbox/partials/StyledLabel'

const { animation, color, fontSize, spacing } = selectors

const CHECKBOX_FOCUS_WIDTH = '0.1rem'

export const StyledCheckboxEnhanced = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 22rem;
  padding: ${spacing('10')};
  margin: ${spacing('4')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '100')};
  outline: none;

  &:hover {
    border-color: ${color('action', '400')};
    box-shadow: 0 0 0 3px ${color('action', '100')};
    cursor: pointer;

    ${StyledInput} ~ ${StyledCheckmark} {
      border: 1px solid ${color('action', '500')};
      outline: none;
      box-shadow: 0 0 0 ${CHECKBOX_FOCUS_WIDTH} ${color('action', '500')};
      transition: all ${animation('default')};
    }
  }

  ${StyledLabel} {
    font-size: ${fontSize('m')};
    color: ${color('neutral', '500')};
    pointer-events: none;
  }
`
