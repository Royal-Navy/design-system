import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { TIMELINE_BORDER_COLOR, TIMELINE_ROW_HEADER_WIDTH } from '../constants'

interface StyledInnerProps {
  $hasSide: boolean
}

export const StyledInner = styled.div<StyledInnerProps>`
  overflow-y: hidden;
  border-right: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  margin-left: ${({ $hasSide }) =>
    $hasSide ? `${TIMELINE_ROW_HEADER_WIDTH}px` : 'initial'};
`
