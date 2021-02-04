import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, zIndex } = selectors

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
