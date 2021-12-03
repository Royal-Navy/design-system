import styled from 'styled-components'

import { RANGE_SLIDER_BG_COLOR } from '../constants'

export const StyledRailInner = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
  background-color: ${RANGE_SLIDER_BG_COLOR};
  pointer-events: none;
`
