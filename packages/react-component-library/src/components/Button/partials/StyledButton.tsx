import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { rgba } from 'polished'

import { BUTTON_ICON_POSITION, BUTTON_VARIANT } from '../constants'
import { ButtonIconPositionType, ButtonVariantType } from '../Button'
import { ComponentSizeType, COMPONENT_SIZE } from '../../Forms'

interface StyledButtonProps {
  $variant: ButtonVariantType
  $size: ComponentSizeType
  $iconPosition: ButtonIconPositionType
}

const { color, spacing, fontSize, shadow } = selectors

const DROP_SHADOW = `0 2px 6px ${rgba(0, 0, 0, 0.3)}`
const TRANSPARENT_SHADOW = shadow('0')
const DEFAULT_HOVER_BORDER_SHADOW = `0 0 0 3px ${color('action', '100')}`
const DANGER_HOVER_BORDER_SHADOW = `0 0 0 3px ${color('danger', '100')}`

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  height: 46px;
  display: inline-flex;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === BUTTON_ICON_POSITION.LEFT ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: ${TRANSPARENT_SHADOW}, ${DROP_SHADOW};
  outline: 0;
  padding: 0 ${spacing('6')};
  font-size: ${fontSize('m')};
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: all 75ms cubic-bezier(0, 1.19, 0.82, 0.9);
  white-space: nowrap;

  &:hover {
    text-decoration: none;
  }

  ${({ $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      border-radius: 10px;
      height: 33px;
      font-size: ${fontSize('base')};
    `}

  ${({ $variant }) =>
    $variant === BUTTON_VARIANT.PRIMARY &&
    css`
      color: ${color('neutral', 'white')};
      background-color: ${color('action', '600')};
      border: 2px solid ${color('action', '800')};

      &:focus,
      &:hover {
        background-color: ${color('action', '800')};
      }

      &:active {
        background-color: ${color('action', '900')};
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_VARIANT.SECONDARY &&
    css`
      color: ${color('action', '900')};
      background-color: ${color('action', '100')};
      border: 2px solid ${color('action', '600')};

      &:focus,
      &:hover {
        background-color: ${color('action', '200')};
      }

      &:active {
        background-color: ${color('action', '300')};
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_VARIANT.TERTIARY &&
    css`
      color: ${color('action', '600')};
      background-color: ${color('neutral', 'white')};
      border: 1px solid ${color('action', '600')};

      &:focus,
      &:hover {
        background-color: ${color('neutral', '000')};
      }

      &:active {
        background-color: ${color('neutral', '100')};
      }
    `}


  ${({ $variant }) =>
    ($variant === BUTTON_VARIANT.PRIMARY ||
      $variant === BUTTON_VARIANT.SECONDARY ||
      $variant === BUTTON_VARIANT.TERTIARY) &&
    css`
      &:focus,
      &:hover {
        box-shadow: ${DEFAULT_HOVER_BORDER_SHADOW}, ${DROP_SHADOW};
      }

      &:active {
        box-shadow: ${TRANSPARENT_SHADOW}, ${TRANSPARENT_SHADOW};
      }

      &:disabled {
        &,
        &:hover,
        &:active,
        &:focus {
          background: ${color('neutral', '000')};
          border: ${$variant === BUTTON_VARIANT.TERTIARY ? '1px' : '2px'} solid
            ${color('neutral', '200')};
          box-shadow: none;
          color: ${color('neutral', '400')};
          cursor: not-allowed;
        }
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_VARIANT.DANGER &&
    css`
      color: ${color('neutral', 'white')};
      background-color: ${color('danger', '700')};
      border: 2px solid ${color('danger', '900')};

      &:focus,
      &:hover {
        background-color: ${color('danger', '800')};
        box-shadow: ${DANGER_HOVER_BORDER_SHADOW}, ${DROP_SHADOW};
      }

      &:active {
        background-color: ${color('danger', '900')};
        box-shadow: ${TRANSPARENT_SHADOW}, ${TRANSPARENT_SHADOW};
      }

      &:disabled {
        &,
        &:hover,
        &:active,
        &:focus {
          background: ${color('neutral', '000')};
          border: 2px solid ${color('neutral', '200')};
          box-shadow: none;
          color: ${color('neutral', '400')};
          cursor: not-allowed;
        }
      }
    `}
`
