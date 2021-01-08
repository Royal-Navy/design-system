import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { rgba } from 'polished'

import {
  BUTTON_FOCUS_WIDTH,
  BUTTON_BORDER_RADIUS,
  BUTTON_VARIANT,
  BUTTON_COLOR,
  BUTTON_BORDER_RADIUS_SMALL,
  BUTTON_SIZE,
  BUTTON_ICON_POSITION,
} from '../constants'
import {
  ButtonVariantType,
  ButtonSizeType,
  ButtonIconPositionType,
} from '../Button'
import { StyledText } from './StyledText'
import { StyledIcon } from './StyledIcon'

interface StyledButtonProps {
  $disabled?: boolean
  $variant?: ButtonVariantType
  $color?: typeof BUTTON_COLOR.DANGER
  $size?: ButtonSizeType
  $iconPosition?: ButtonIconPositionType
}

const { color, spacing, fontSize, animation } = selectors

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${BUTTON_BORDER_RADIUS};
  outline: 0;
  padding: ${spacing('5')} ${spacing('8')} ${spacing('5')} ${spacing('8')};
  font-size: ${fontSize('m')};
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: all ${animation('default')};
  text-decoration: none;
  white-space: nowrap;

  color: ${color('neutral', 'white')};
  background-color: ${color('action', '600')};

  &:hover {
    text-decoration: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    background-color: ${color('action', '700')};
  }

  &:focus {
    border: 1px solid ${color('action', '500')};
    box-shadow: 0 0 0 ${BUTTON_FOCUS_WIDTH} ${rgba(color('action', '500'), 0.3)};
  }

  ${({ $iconPosition }) =>
    $iconPosition === BUTTON_ICON_POSITION.LEFT &&
    `
      flex-direction: row-reverse;

      ${StyledIcon} {
        margin-left: 0;
        margin-right: ${spacing('3')};
      }
  `}

  ${({ $disabled }) =>
    $disabled &&
    `
      pointer-events: hover;
      background: ${color('neutral', '000')} !important;
      color: ${color('neutral', '200')} !important;
      border: 1px solid ${color('neutral', '100')} !important;
      cursor: not-allowed;

      &:hover {
        box-shadow: none;
        transform: none;
      }
  `}

  ${({ $variant, $color }) => {
    if ($variant === BUTTON_VARIANT.PRIMARY) {
      return `
        color: ${color('neutral', 'white')};
        background-color: ${color('action', '600')};

        &:hover {
          background-color: ${color('action', '700')};
        }

        ${
          $color === BUTTON_COLOR.DANGER &&
          `
            background-color: ${color('danger', '700')};
            color: ${color('neutral', 'white')};

            &:hover {
              background-color: ${color('danger', '800')};
            }

            &:focus {
              border-color: ${color('danger', '700')};
              box-shadow:
                0
                0
                0 ${BUTTON_FOCUS_WIDTH} ${rgba(color('danger', '800'), 0.5)};
            }
        `
        }
      `
    }

    if ($variant === BUTTON_VARIANT.SECONDARY) {
      return `
        border: 1px solid ${color('neutral', '200')};
        color: ${color('neutral', '400')};
        background-color: ${color('neutral', 'white')};
        background-image: none;

        &:hover {
          background-color: ${color('neutral', 'white')};
          color: ${color('neutral', '600')};
        }

        ${
          $color === BUTTON_COLOR.DANGER &&
          `
            color: ${color('danger', '700')};

            &:hover {
              color: ${color('danger', '700')};
            }

            &:focus {
              border-color: ${color('danger', '700')};
              box-shadow:
                0
                0
                0
                ${BUTTON_FOCUS_WIDTH} ${rgba(color('danger', '800'), 0.5)};
            }
        `
        }
      `
    }

    if ($variant === BUTTON_VARIANT.TERTIARY) {
      return `
        border: 1px solid transparent;
        color: ${color('neutral', '400')};
        background-color: transparent;
        background-image: none;

        &:hover {
          transform: none;
          box-shadow: none;
          border: 1px solid ${color('neutral', '200')};
          background-color: ${color('neutral', 'white')};

          ${StyledText} {
            &::after {
              transform: scale(0, 1);
            }
          }
        }

        ${StyledText} {
          position: relative;
          z-index: 0;

          &::after {
            transition: transform ${animation('default')};
            transform-origin: 0 0;
            bottom: 2px;
            left: 0;
            right: 0;
            height: 2px;
            background: ${color('neutral', '200')};
            content: "";
            position: absolute;
            border-radius: 5px;
            z-index: -1;
          }
        }

        ${
          $color === BUTTON_COLOR.DANGER &&
          `
            color: ${color('danger', '700')};

            ${StyledText} {
              &::after {
                background: ${color('danger', '300')};
              }
            }
        `
        }
      `
    }

    return ``
  }}

  ${({ $size }) => {
    if ($size === BUTTON_SIZE.SMALL) {
      return `
        padding: ${spacing('3')} ${spacing('5')};
        border-radius: ${BUTTON_BORDER_RADIUS_SMALL};
        font-size: ${fontSize('base')};
      `
    }

    if ($size === BUTTON_SIZE.LARGE) {
      return `
        padding: ${spacing('6')} ${spacing('9')};
        font-size: ${fontSize('l')};
        line-height: 1.45;

        ${StyledText} {
          transform: translateY(-1px);
        }
      `
    }

    if ($size === BUTTON_SIZE.XLARGE) {
      return `
        font-size: f.font-size("l");
        padding: f.spacing("6") f.spacing("10");

        ${StyledIcon} svg {
          width: 20px;
          height: 20px;
        }
      `
    }

    return ``
  }}
`
