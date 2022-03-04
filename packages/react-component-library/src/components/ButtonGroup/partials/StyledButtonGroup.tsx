import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledButton } from '../../Button/partials/StyledButton'

interface StyledButtonGroupProps {
  $size?: string
}

const { color, shadow } = selectors

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>`
  position: relative;
  z-index: 0;
  display: inline-block;
  border-radius: 4px;

  ${StyledButton} {
    background-color: ${color('neutral', 'white')};
    border-radius: 0;
    border: 1px solid ${color('neutral', '200')};
    box-shadow: ${shadow('2')};
    margin-right: -1px;
    position: relative;
    z-index: 1;

    &:first-child {
      border-radius: 4px 0 0 4px;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
      margin-right: 0;
    }

    &:hover,
    &:focus {
      background-color: ${color('neutral', '100')};
      color: ${color('neutral', '600')};
      box-shadow: ${shadow('2')};
      z-index: 2;
    }

    &[disabled] {
      z-index: 0;
      color: ${color('neutral', '300')};
      background-color: ${color('neutral', '000')};
      border: 1px solid ${color('neutral', '200')};
      box-shadow: none;
    }
  }
`
