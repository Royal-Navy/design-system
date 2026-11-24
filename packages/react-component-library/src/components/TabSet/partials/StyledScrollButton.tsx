import { color } from '@royalnavy/design-tokens'
import { styled, css } from 'styled-components'
import { ACTIVE_TAB_HEIGHT } from '../../TabBase/partials/StyledTab'
import { TAB_VARIANT } from '../../TabBase/constants'
import { TabVariantType } from '../../TabBase/types'

export interface StyledScrollButtonProps {
  $variant?: TabVariantType
}

export const StyledScrollButton = styled.button<StyledScrollButtonProps>`
  background: ${color('neutral', 'white')};
  border: none;
  color: ${color('action', '500')};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  height: ${ACTIVE_TAB_HEIGHT};
  width: 40px;
  align-items: center;

  ${({ $variant }) =>
    $variant === TAB_VARIANT.UNDERLINE &&
    css`
      align-self: stretch;
      height: auto;
      background: transparent;
    `}
`
