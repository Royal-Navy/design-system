import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledItemValue = styled.dd`
  color: ${color('neutral', '600')};
  font-weight: 600;
  font-size: ${fontSize('base')};
`
