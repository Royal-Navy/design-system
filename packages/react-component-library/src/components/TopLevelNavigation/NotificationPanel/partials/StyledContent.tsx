import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, fontSize, color } = selectors

export const StyledContent = styled.div`
  margin-left: ${spacing('6')};
  font-size: ${fontSize('s')};
  line-height: 1.3;

  strong {
    color: ${color('neutral', '000')};
  }
`
