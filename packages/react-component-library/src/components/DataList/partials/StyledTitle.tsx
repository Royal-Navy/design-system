import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledTitle = styled.h2`
  color: ${color('neutral', '600')};
  font-size: ${fontSize('m')};
  font-weight: 500;
  display: flex;
  align-items: center;
`
