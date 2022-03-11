import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { ACTIVE_TAB_BORDER } from '../../TabSet/partials/StyledTab'

const { zIndex } = selectors

export const StyledTabNav = styled.nav`
  padding: 0 16px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 51px;
    height: 1px;
    width: 100%;
    border-bottom: ${ACTIVE_TAB_BORDER};
    z-index: ${zIndex('header', 1)};
  }
`
