import styled from 'styled-components'
import { spacing, mq } from '@royalnavy/design-tokens'

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

const ICON_VARIANT_MAP = {
  [ALERT_VARIANT.DANGER]: DANGER_ALERT_ICON_COLOR,
  [ALERT_VARIANT.INFO]: ALERT_ICON_COLOR,
  [ALERT_VARIANT.SUCCESS]: SUCCESS_ALERT_ICON_COLOR,
  [ALERT_VARIANT.WARNING]: WARNING_ALERT_ICON_COLOR,
}

export const StyledIcon = styled.div<StyledIconProps>`
  display: inline-flex;
  align-self: stretch;
  flex: 0 0 auto;
  color: ${({ $variant }) => ICON_VARIANT_MAP[$variant]};
  transform: translateY(1px);

  ${mq({ gte: 'xs' })`
    padding: ${spacing('4')} ${spacing('4')} 0 ${spacing('8')};
  `}
`
