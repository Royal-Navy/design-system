import styled  from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing, zIndex } = selectors

export const StyledTodayMarker = styled.div`
  position: absolute;
  top: 4rem;
  display: inline-block;
  width: ${spacing('px')};
  height: 100vh;
  background-color: ${color('danger', '500')};
  z-index: ${zIndex('body', 999)};

  &::before {
    content: 'Today';
    display: inline-block;
    color: ${color('danger', '500')};
    font-size: ${fontSize('s')};
    transform: translate(-50%, -175%);
  }
`
