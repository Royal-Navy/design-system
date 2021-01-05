import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { AlertVariantType } from '../Alert'

import {
  ALERT_ICON_COLOR,
  DANGER_ALERT_ICON_COLOR,
  SUCCESS_ALERT_ICON_COLOR,
  WARNING_ALERT_ICON_COLOR,
  ALERT_VARIANT,
} from '../constants'

interface StyledIconProps {
  $variant: AlertVariantType
}

const { spacing } = selectors

const ICON_VARIANT_MAP = {
  [ALERT_VARIANT.DANGER]: DANGER_ALERT_ICON_COLOR,
  [ALERT_VARIANT.SUCCESS]: SUCCESS_ALERT_ICON_COLOR,
  [ALERT_VARIANT.WARNING]: WARNING_ALERT_ICON_COLOR,
}

export const StyledIcon = styled.div<StyledIconProps>`
  display: inline-flex;
  align-self: flex-start;
  color: ${ALERT_ICON_COLOR};
  padding: ${spacing('4')} ${spacing('5')} ${spacing('4')} ${spacing('6')};
  transform: translateY(1px);

  ${({ $variant }) =>
    $variant &&
    css`
      color: ${ICON_VARIANT_MAP[$variant]};
    `}
`
