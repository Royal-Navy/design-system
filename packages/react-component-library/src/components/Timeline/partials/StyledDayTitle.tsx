import { styled } from 'styled-components'
import { themeColor, fontSize, zIndex } from '@royalnavy/design-tokens'

import { TIMELINE_BG_COLOR } from '../constants'

export const StyledDayTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSize('xs')};
  color: ${themeColor('neutral', '400')};
  background-color: ${TIMELINE_BG_COLOR};
  z-index: ${zIndex('body', 2)};
`
