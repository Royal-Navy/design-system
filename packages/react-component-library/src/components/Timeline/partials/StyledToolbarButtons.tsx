import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

export const StyledToolbarButtons = styled.div`
  display: inline-block;
  margin: ${spacing('4')} ${spacing('6')};

  button {
    margin: 0 ${spacing('2')};

    &:first-of-type {
      margin-left: 0;
    }
  }
`
