import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { fontSize, spacing } = selectors

interface StyledInputProps {
  $hasLabel: boolean
  $isCondensed: boolean
  $offset: number
}

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 0 ${({ $offset }) => `${$offset}px`};
  padding: ${({ $hasLabel, $isCondensed }) => {
    if ($isCondensed) {
      return spacing('3')
    }

    if ($hasLabel) {
      return `${spacing('10')} ${spacing('6')} ${spacing('2')}`
    }

    return spacing('6')
  }};
  border: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  font-size: ${fontSize('base')};

  &:focus {
    outline: 0;
  }
`
