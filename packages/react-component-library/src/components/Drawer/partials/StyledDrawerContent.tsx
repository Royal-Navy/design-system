import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

export const StyledDrawerContent = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: ${spacing('4')};

  & > h1 {
    margin-top: 0;
  }
`
