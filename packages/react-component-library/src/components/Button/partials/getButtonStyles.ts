import { css } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { BUTTON_ICON_POSITION } from '../constants'
import { ButtonIconPositionType, ButtonVariantType } from '../Button'
import { ComponentSizeType } from '../../Forms'
import { SIZE_MAP, STYLES_MAP } from './styles'

const DEFAULT_HORIZONTAL_PADDING = spacing('7')

export interface StyledButtonProps {
  $variant: ButtonVariantType
  $size: ComponentSizeType
  $iconPosition?: ButtonIconPositionType
}

const commonStyles = css`
  box-sizing: border-box;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: all 75ms cubic-bezier(0, 1.19, 0.82, 0.9);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export function getButtonStyles({
  $size,
  $variant,
  $iconPosition = BUTTON_ICON_POSITION.RIGHT,
}: StyledButtonProps) {
  const styles = STYLES_MAP[$variant]
  const sizes = SIZE_MAP[$size]
  return css`
    ${commonStyles};
    font-size: ${sizes.fontSize};
    height: ${sizes.height};

    flex-direction: ${$iconPosition === BUTTON_ICON_POSITION.LEFT
      ? 'row-reverse'
      : 'row'};

    border-radius: ${sizes.borderRadius};

    padding: 0 ${styles.horizontalPadding ?? DEFAULT_HORIZONTAL_PADDING};

    color: ${styles.default.color};
    background-color: ${styles.default.backgroundColor};
    border: ${styles.default.border};
    outline: ${styles.default.outline};

    text-decoration: ${styles.default.textDecoration};

    &:hover {
      color: ${styles.hover?.color ?? styles.default.color};
      background-color: ${styles.hover?.backgroundColor ??
      styles.default.backgroundColor};
      border: ${styles.hover?.border ?? styles.default.border};
      outline: ${styles.hover?.outline ?? styles.default.outline};
      text-decoration: ${styles.hover?.textDecoration ??
      styles.default.textDecoration};
    }

    &:focus {
      color: ${styles.focus?.color ?? styles.default.color};
      background-color: ${styles.focus?.backgroundColor ??
      styles.default.backgroundColor};
      border: ${styles.focus?.border ?? styles.default.border};
      outline: ${styles.focus?.outline ?? styles.default.outline};
      text-decoration: ${styles.focus?.textDecoration ??
      styles.default.textDecoration};
    }

    &:active {
      color: ${styles.active?.color ?? styles.default.color};
      background-color: ${styles.active?.backgroundColor ??
      styles.default.backgroundColor};
      border: ${styles.active?.border ?? styles.default.border};
    }

    &:disabled {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${styles.disabled.color};
        background-color: ${styles.disabled.backgroundColor};
        border: ${styles.disabled.border};
        outline: ${styles.disabled.outline};
        text-decoration: ${styles.disabled.textDecoration};

        box-shadow: none;
        cursor: not-allowed;
        text-decoration: none;
      }
    }
  `
}
