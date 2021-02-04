import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { TIMELINE_BORDER_COLOR, TIMELINE_ROW_HEADER_WIDTH } from '../constants'

const { spacing } = selectors

interface StyledInnerProps {
  hasSide: boolean
}

export const StyledInner = styled.div<StyledInnerProps>`
  overflow-y: hidden;
  border-right: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  margin-left: ${({ hasSide }) =>
    hasSide ? TIMELINE_ROW_HEADER_WIDTH : 'initial'};
`
