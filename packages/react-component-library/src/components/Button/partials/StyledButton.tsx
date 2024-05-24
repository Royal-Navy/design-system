import styled, { css } from 'styled-components'
import { color, fontSize, shadow, spacing } from '@royalnavy/design-tokens'
import { rgba } from 'polished'

import { BUTTON_ICON_POSITION, BUTTON_VARIANT } from '../constants'
import { ButtonIconPositionType, ButtonVariantType } from '../Button'
import { ComponentSizeType, COMPONENT_SIZE } from '../../Forms'

const DROP_SHADOW = `0 2px 6px ${rgba(0, 0, 0, 0.3)}`
const TRANSPARENT_SHADOW = shadow('0')
const DEFAULT_HOVER_BORDER_SHADOW = `0 0 0 2px ${color('action', '900')}`
const DANGER_HOVER_BORDER_SHADOW = `0 0 0 2px ${color('danger', '900')}`

const COLOR_MAP = {
  [BUTTON_VARIANT.PRIMARY]: {
    color: color('neutral', 'white'),
    backgroundColor: color('action', '600'),
    borderColor: color('action', '600'),
    borderWidth: 0,
    hoverBackgroundColor: color('action', '700'),
    hoverBoxShadow: DEFAULT_HOVER_BORDER_SHADOW,
    activeBackgroundColor: color('action', '900'),
    focusBorderColor: color('action', '800'),
  },
  [BUTTON_VARIANT.SECONDARY]: {
    color: color('action', '900'),
    backgroundColor: color('action', '100'),
    borderColor: color('action', '600'),
    borderWidth: '1px',
    hoverBackgroundColor: color('action', '200'),
    hoverBoxShadow: DEFAULT_HOVER_BORDER_SHADOW,
    activeBackgroundColor: color('action', '300'),
    focusBorderColor: color('action', '300'),
  },
  [BUTTON_VARIANT.TERTIARY]: {
    color: color('action', '600'),
    backgroundColor: color('neutral', 'white'),
    borderColor: color('action', '600'),
    borderWidth: '1px',
    hoverBackgroundColor: color('neutral', '000'),
    hoverBoxShadow: DEFAULT_HOVER_BORDER_SHADOW,
    activeBackgroundColor: color('neutral', '100'),
    focusBorderColor: color('action', '800'),
  },
  [BUTTON_VARIANT.DANGER]: {
    color: color('neutral', 'white'),
    backgroundColor: color('danger', '700'),
    borderColor: color('danger', '900'),
    borderWidth: 0,
    hoverBackgroundColor: color('danger', '800'),
    hoverBoxShadow: DANGER_HOVER_BORDER_SHADOW,
    activeBackgroundColor: color('danger', '900'),
    focusBorderColor: color('action', '800'),
  },
}

const SIZE_MAP = {
  [COMPONENT_SIZE.FORMS]: {
    height: '46px',
    fontSize: fontSize('m'),
    borderRadius: '8px',
  },
  [COMPONENT_SIZE.SMALL]: {
    height: '33px',
    fontSize: fontSize('base'),
    borderRadius: '8px',
  },
}

interface StyledButtonProps {
  $variant: ButtonVariantType
  $size: ComponentSizeType
  $iconPosition?: ButtonIconPositionType
}

export function getButtonStyles({
  $size,
  $variant,
  $iconPosition = BUTTON_ICON_POSITION.RIGHT,
}: StyledButtonProps) {
  return css`
    height: ${SIZE_MAP[$size].height};
    display: inline-flex;
    flex-direction: ${$iconPosition === BUTTON_ICON_POSITION.LEFT
      ? 'row-reverse'
      : 'row'};
    align-items: center;
    justify-content: center;
    border-radius: ${SIZE_MAP[$size].borderRadius};
    outline: 0;
    padding: 0 ${spacing('7')};
    font-size: ${SIZE_MAP[$size].fontSize};
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    transition: all 75ms cubic-bezier(0, 1.19, 0.82, 0.9);
    white-space: nowrap;

    &:hover {
      text-decoration: none;
    }

    &:active {
      box-shadow: ${TRANSPARENT_SHADOW}, ${TRANSPARENT_SHADOW};
    }

    ${css`
      color: ${COLOR_MAP[$variant].color};
      background-color: ${COLOR_MAP[$variant].backgroundColor};
      border: ${COLOR_MAP[$variant].borderWidth} solid
        ${COLOR_MAP[$variant].borderColor};

      &:focus {
        border: ${COLOR_MAP[$variant].borderWidth} solid
          ${COLOR_MAP[$variant].focusBorderColor};
      }

      &:focus,
      &:hover {
        background-color: ${COLOR_MAP[$variant].hoverBackgroundColor};
        box-shadow: ${COLOR_MAP[$variant].hoverBoxShadow}, ${DROP_SHADOW};
      }

      &:active {
        background-color: ${COLOR_MAP[$variant].activeBackgroundColor};
      }
    `}

    &:disabled {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${color('neutral', '400')};
        background-color: ${color('neutral', '000')};
        border: ${COLOR_MAP[$variant].borderWidth} solid
          ${color('neutral', '200')};
        box-shadow: none;
        cursor: not-allowed;
      }
    }
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  ${getButtonStyles};
`
