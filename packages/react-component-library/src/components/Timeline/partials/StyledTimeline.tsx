import { styled } from 'styled-components'
import { themeColor, zIndex } from '@royalnavy/design-tokens'

export const StyledTimeline = styled.div`
  position: relative;
  z-index: ${zIndex('timeline', 0)};
  display: flex;
  width: 100%;
  background-color: ${themeColor('neutral', 'white')};
`
