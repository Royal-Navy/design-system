import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

export const StyledTitle = styled.span`
  display: block;
  padding-bottom: 8px;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: 700;

  &:only-child {
    padding-bottom: 0;
  }
`
