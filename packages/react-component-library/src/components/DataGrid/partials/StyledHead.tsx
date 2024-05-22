import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

export const StyledHead = styled.thead`
  background: ${color('neutral', '000')};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  tr,
  th {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`
