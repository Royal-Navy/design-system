import { styled, css } from 'styled-components'

import { TAB_VARIANT } from '../constants'
import { TabVariantType } from '../types'
import { UNDERLINE_TAB_RULE } from './StyledTab'

interface StyledTabsProps {
  $variant?: TabVariantType
}

export const StyledTabs = styled.ol<StyledTabsProps>`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${({ $variant }) =>
    $variant === TAB_VARIANT.UNDERLINE &&
    css`
      box-shadow: ${UNDERLINE_TAB_RULE};
    `}
`
