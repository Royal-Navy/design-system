import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

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
