import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { SwitchSizeType } from '../Switch'
import { StyledOption } from './StyledOption'

interface StyledSwitchProps {
  $size?: SwitchSizeType
}

const { fontSize, spacing } = selectors

export const StyledSwitch = styled.fieldset<StyledSwitchProps>`
  border: none;
  padding: 0;
  margin: 0;
  font-size: ${fontSize('base')};
  position: relative;

  ${({ $size }) => {
    if ($size === 'small') {
      return `
      font-size: ${fontSize('s')};

      ${StyledOption}::before {
        padding: ${spacing('8')} ${spacing('11')};
      }
      `
    }

    if ($size === 'large') {
      return `
      font-size: ${fontSize('m')};

      ${StyledOption} {
        padding: ${spacing('6')} ${spacing('8')};
      }
      `
    }

    return ``
  }}
`
