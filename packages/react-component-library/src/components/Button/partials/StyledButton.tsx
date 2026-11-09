import { styled, css } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import {
  getButtonStyles,
  StyledButtonProps as BaseStyledButtonProps,
} from './getButtonStyles'
import { BUTTON_ICON_POSITION, BUTTON_VARIANT } from '../constants'

interface StyledButtonProps extends BaseStyledButtonProps {
  $showLoadingText: boolean
  $hasTextAndIcon: boolean
  $isLoading: boolean
}

const ICON_GAP = spacing('5')
const LOADER_GAP = spacing('4')

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  ${getButtonStyles};

  gap: ${({ $showLoadingText }) => ($showLoadingText ? LOADER_GAP : 'initial')};

  ${({
    $hasTextAndIcon,
    $iconPosition = BUTTON_ICON_POSITION.RIGHT,
    $isLoading,
    $showLoadingText,
    $variant,
  }) => {
    if ($variant === BUTTON_VARIANT.NO_CONTAINER) {
      return null
    }

    const iconSide =
      $iconPosition === BUTTON_ICON_POSITION.LEFT ? 'left' : 'right'
    const loaderSide = iconSide === 'left' ? 'right' : 'left'

    return css`
      ${$hasTextAndIcon &&
      css`
        padding-${iconSide}: ${ICON_GAP};
      `}

      ${$isLoading &&
      $showLoadingText &&
      css`
        padding-${loaderSide}: ${LOADER_GAP};
      `}
    `
  }}
`
