import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { TIMELINE_BG_COLOR } from '../constants'

const { color, fontSize, zIndex } = selectors

export const StyledDayTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSize('xs')};
  color: ${color('neutral', '400')};
  background-color: ${TIMELINE_BG_COLOR};
  z-index: ${zIndex('body', 2)};
`
