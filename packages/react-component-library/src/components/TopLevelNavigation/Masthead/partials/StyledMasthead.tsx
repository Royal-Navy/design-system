import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export const StyledMastHead = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: ${color('neutral', 'white')};
`
