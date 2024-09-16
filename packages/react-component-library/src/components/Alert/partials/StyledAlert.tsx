import styled, { css } from 'styled-components'
import { spacing, shadow, mq } from '@royalnavy/design-tokens'

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
  $hideBorder?: boolean
  $hideDismiss?: boolean
}

const STATE_VARIANT_MAP = {
  [ALERT_VARIANT.DANGER]: DANGER_ALERT_STATE_COLOR,
  [ALERT_VARIANT.INFO]: ALERT_STATE_COLOR,
  [ALERT_VARIANT.SUCCESS]: SUCCESS_ALERT_STATE_COLOR,
  [ALERT_VARIANT.WARNING]: WARNING_ALERT_STATE_COLOR,
}

const getBorderStyles = ({ $hideBorder }: StyledAlertProps) => {
  if ($hideBorder) {
    return css`
      border: none;
      box-shadow: none;
      border-radius: 0;
    `
  }

  return css`
    border: ${spacing('px')} solid ${ALERT_BORDER_COLOR};
    box-shadow: ${shadow('1')};
    border-radius: 4px;
  `
}

export const StyledAlert = styled.div<StyledAlertProps>`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  background-color: ${ALERT_BACKGROUND_COLOR};
  padding: ${spacing('4')};
  padding-left: ${spacing('10')};

  ${mq({ gte: 'xs' })`
    flex-wrap: unset;
    padding: ${spacing('4')};
  `}

  ${getBorderStyles}

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    bottom: 8px;
    width: 4px;
    background: ${({ $variant }) => STATE_VARIANT_MAP[$variant]};
    border-radius: 4px;
  }
`
