import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

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
