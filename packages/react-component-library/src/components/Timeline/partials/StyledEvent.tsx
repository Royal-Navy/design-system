import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, zIndex } = selectors

interface StyledEventProps {
  $leftPx: string
}

export const StyledEvent = styled.div<StyledEventProps>`
  position: absolute;
  top: 50%;
  left: ${({ $leftPx }) => $leftPx || 0};
  width: 4.5rem;
  transform: translateY(-50%);
  display: inline-flex;
  flex-direction: column;
  padding: ${spacing('2')} 0;
  overflow: visible;
  z-index: ${zIndex('body', 2)};
`
