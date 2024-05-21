import styled from 'styled-components'
import { zIndex } from '@royalnavy/design-tokens'

import { StyledTabSetProps } from './StyledTabSet'
import { ACTIVE_TAB_BORDER } from '../../TabBase/partials/StyledTab'

export const StyledBody = styled.div<StyledTabSetProps>`
  padding: 24px 16px;
  overflow-y: auto;
  border: ${ACTIVE_TAB_BORDER};
  position: relative;
  z-index: ${zIndex('header', 1)};
`
