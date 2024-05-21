import styled from 'styled-components'
import { color, spacing, zIndex } from '@royalnavy/design-tokens'

export const StyledNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: inherit;

  span {
    background-color: ${color('neutral', 'white')};
    padding: ${spacing('2')};
    z-index: ${zIndex('body', 1)};
  }
`
