import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, zIndex } = selectors

export const StyledTimeline = styled.div`
  position: relative;
  z-index: ${zIndex('timeline', 0)};
  display: flex;
  width: 100%;
  background-color: ${color('neutral', 'white')};
`
