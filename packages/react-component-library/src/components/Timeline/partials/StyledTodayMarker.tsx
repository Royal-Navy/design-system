import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing, zIndex } = selectors

interface StyledTodayMarkerProps {
  $leftPx: string
}

export const StyledTodayMarker = styled.div<StyledTodayMarkerProps>`
  position: absolute;
  top: 4rem;
  left: ${({ $leftPx }) => $leftPx || 0};
  display: inline-block;
  width: ${spacing('px')};
  height: 100vh;
  background-color: ${color('danger', '500')};
  z-index: ${zIndex('body', 999)};

  &::before {
    content: 'Today';
    display: inline-block;
    color: ${color('danger', '500')};
    background-color: ${color('neutral', 'white')};
    font-size: ${fontSize('xxs')};
    transform: translate(-50%, -200%);
  }
`
