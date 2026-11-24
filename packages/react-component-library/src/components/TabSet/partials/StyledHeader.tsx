import { styled, css } from 'styled-components'
import { StyledTabSetProps } from './StyledTabSet'
import { UNDERLINE_TAB_RULE } from '../../TabBase/partials/StyledTab'
import { TAB_VARIANT } from '../../TabBase/constants'
import { TabVariantType } from '../../TabBase/types'

interface StyledHeaderProps extends StyledTabSetProps {
  $variant?: TabVariantType
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  position: relative;
  margin-bottom: -1px;

  ${({ $isScrollable }) =>
    $isScrollable &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    `}

  ${({ $variant }) =>
    $variant === TAB_VARIANT.UNDERLINE &&
    css`
      box-shadow: ${UNDERLINE_TAB_RULE};
    `}
`
