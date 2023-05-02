import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { AlertVariantType } from '../Alert'

import {
  ALERT_BACKGROUND_COLOR,
  ALERT_BORDER_COLOR,
  ALERT_STATE_COLOR,
  DANGER_ALERT_STATE_COLOR,
  SUCCESS_ALERT_STATE_COLOR,
  WARNING_ALERT_STATE_COLOR,
  ALERT_VARIANT,
} from '../constants'

interface StyledAlertProps {
  $variant: AlertVariantType
}

const { spacing, mq } = selectors

const STATE_VARIANT_MAP = {
  [ALERT_VARIANT.DANGER]: DANGER_ALERT_STATE_COLOR,
  [ALERT_VARIANT.INFO]: ALERT_STATE_COLOR,
  [ALERT_VARIANT.SUCCESS]: SUCCESS_ALERT_STATE_COLOR,
  [ALERT_VARIANT.WARNING]: WARNING_ALERT_STATE_COLOR,
}

export const StyledAlert = styled.div<StyledAlertProps>`
  background-color: ${ALERT_BACKGROUND_COLOR};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  border: ${spacing('px')} solid ${ALERT_BORDER_COLOR};
  border-radius: 4px;
  padding: ${spacing('4')} ${spacing('4')} ${spacing('4')} ${spacing('6')};
  position: relative;
  display: flex;
  align-items: flex-start;

  ${mq({ gte: 'xs' })`
    padding-right: ${spacing('18')};
  `}

  &::before {
    position: absolute;
    top: 8px;
    left: 8px;
    bottom: 8px;
    content: '';
    width: 4px;
    background: ${({ $variant }) => STATE_VARIANT_MAP[$variant]};
    border-radius: 4px;
  }
`
