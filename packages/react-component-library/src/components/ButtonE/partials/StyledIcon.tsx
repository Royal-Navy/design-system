import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { BUTTON_E_ICON_POSITION, BUTTON_E_SIZE } from '../constants'
import { ButtonEIconPositionType, ButtonESizeType } from '../ButtonE'

const { spacing } = selectors

interface StyledIconProps {
  $buttonHasText: boolean
  $buttonSize: ButtonESizeType
  $iconPosition: ButtonEIconPositionType
}

export const StyledIcon = styled.span<StyledIconProps>`
  display: inline-flex;
  align-items: center;

  ${({ $buttonSize, $buttonHasText }) =>
    $buttonSize === BUTTON_E_SIZE.FORMS &&
    !$buttonHasText &&
    css`
      padding: 0 ${spacing('4')};
    `}

  ${({ $buttonHasText, $iconPosition }) =>
    $buttonHasText &&
    css`
      margin-left: ${$iconPosition === BUTTON_E_ICON_POSITION.RIGHT
        ? spacing('5')
        : '0'};
      margin-right: ${$iconPosition === BUTTON_E_ICON_POSITION.LEFT
        ? spacing('5')
        : '0'};
    `};
`
