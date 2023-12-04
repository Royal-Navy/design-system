import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, fontSize, spacing } = selectors

export const StyledItemTitle = styled.h2`
  color: ${color('neutral', '600')};
  font-size: ${fontSize('m')};
  margin-top: 0;
  margin-bottom: ${spacing('2')};
`
