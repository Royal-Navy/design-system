import styled from 'styled-components'
import { zIndex } from '@royalnavy/design-tokens'

import { StyledTabSetProps } from './StyledTabSet'
import { ACTIVE_TAB_BORDER } from '../../TabBase/partials/StyledTab'

export interface StyledBodyProps extends StyledTabSetProps {
  $hasOverflow?: boolean
}

export const StyledBody = styled.div<StyledBodyProps>`
  padding: 24px 16px;
  overflow: ${({ $hasOverflow }) => ($hasOverflow ? 'visible' : 'auto')};
  border: ${ACTIVE_TAB_BORDER};
  position: relative;
  z-index: ${zIndex('header', 1)};
`
