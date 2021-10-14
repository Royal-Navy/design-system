import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { color, fontSize } = selectors

export const StyledLabel = styled.label`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};

  padding: 12px 12px 12px 17px;
  margin-left: 24px;
`
