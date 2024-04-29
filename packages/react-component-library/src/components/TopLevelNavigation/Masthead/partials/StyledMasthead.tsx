import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export const StyledMastHead = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${color('neutral', 'white')};
`
