import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { AlertVariantType } from '../Alert'

import {
  ALERT_TITLE_COLOR,
  DANGER_ALERT_TITLE_COLOR,
  SUCCESS_ALERT_TITLE_COLOR,
  WARNING_ALERT_TITLE_COLOR,
  ALERT_VARIANT,
} from '../constants'

interface StyledTitleProps {
  $variant: AlertVariantType
}

const { spacing, fontSize } = selectors

const TITLE_VARIANT_MAP = {
  [ALERT_VARIANT.DANGER]: DANGER_ALERT_TITLE_COLOR,
  [ALERT_VARIANT.INFO]: ALERT_TITLE_COLOR,
  [ALERT_VARIANT.SUCCESS]: SUCCESS_ALERT_TITLE_COLOR,
  [ALERT_VARIANT.WARNING]: WARNING_ALERT_TITLE_COLOR,
}

export const StyledTitle = styled.h2<StyledTitleProps>`
  color: ${({ $variant }) => TITLE_VARIANT_MAP[$variant]};
  font-size: ${fontSize('l')};
  font-weight: bold;
  margin-bottom: ${spacing('2')};
`
