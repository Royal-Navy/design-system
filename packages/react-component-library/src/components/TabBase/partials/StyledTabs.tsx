import { styled, css } from 'styled-components'
import { isDarkColorMode, themeColor, Theme } from '@royalnavy/design-tokens'

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
  background-color: ${({ theme }) =>
    isDarkColorMode(theme as Theme)
      ? themeColor('neutral', '000')
      : 'transparent'};

  ${({ $variant }) =>
    $variant === TAB_VARIANT.UNDERLINE &&
    css`
      box-shadow: ${UNDERLINE_TAB_RULE};
    `}
`
