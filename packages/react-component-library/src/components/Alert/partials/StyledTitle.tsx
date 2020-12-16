import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { AlertVariantType } from '../Alert'

import {
  ALERT_TITLE_COLOR,
  DANGER_ALERT_TITLE_COLOR,
  SUCCESS_ALERT_TITLE_COLOR,
  WARNING_ALERT_TITLE_COLOR,
  ALERT_VARIANT,
} from '../constants'

interface StyledTitleProps {
  $variant?: AlertVariantType
}

const { spacing, fontSize } = selectors

const TITLE_VARIANT_MAP = {
  [ALERT_VARIANT.DANGER]: DANGER_ALERT_TITLE_COLOR,
  [ALERT_VARIANT.SUCCESS]: SUCCESS_ALERT_TITLE_COLOR,
  [ALERT_VARIANT.WARNING]: WARNING_ALERT_TITLE_COLOR,
}

export const StyledTitle = styled.h2<StyledTitleProps>`
  color: ${ALERT_TITLE_COLOR};
  font-size: ${fontSize('l')};
  font-weight: bold;
  margin-bottom: ${spacing('2')};

  ${({ $variant }) =>
    $variant &&
    css`
      color: ${TITLE_VARIANT_MAP[$variant]};
    `}
`
