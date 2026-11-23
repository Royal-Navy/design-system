import { styled, css } from 'styled-components'
import { zIndex } from '@royalnavy/design-tokens'

import { ACTIVE_TAB_BORDER } from '../../TabBase/partials/StyledTab'
import { TAB_VARIANT } from '../../TabBase/constants'
import { TabVariantType } from '../../TabBase/types'

interface StyledTabNavProps {
  $variant?: TabVariantType
}

export const StyledTabNav = styled.nav<StyledTabNavProps>`
  position: relative;
  padding: 0 16px;

  ${({ $variant }) =>
    $variant === TAB_VARIANT.BOXED &&
    css`
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 39px;
        height: 1px;
        width: 100%;
        border-bottom: ${ACTIVE_TAB_BORDER};
        z-index: ${zIndex('header', 1)};
      }
    `}
`
