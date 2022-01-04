import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { rgba } from 'polished'

import { BUTTON_E_ICON_POSITION, BUTTON_E_VARIANT } from '../constants'
import { ButtonEIconPositionType, ButtonEVariantType } from '../ButtonE'
import { ComponentSizeType, COMPONENT_SIZE } from '../../Forms'

interface StyledButtonProps {
  $variant: ButtonEVariantType
  $size: ComponentSizeType
  $iconPosition: ButtonEIconPositionType
}

const { color, spacing, fontSize } = selectors

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  height: 46px;
  display: inline-flex;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === BUTTON_E_ICON_POSITION.LEFT ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
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
    $variant === BUTTON_E_VARIANT.PRIMARY &&
    css`
      border: 1px solid ${color('action', '600')};
      color: ${color('neutral', 'white')};
      background-color: ${color('action', '600')};
      box-shadow: 0 1px 3px ${rgba(0, 0, 0, 0.1)};

      &:focus,
      &:hover {
        background-color: ${color('action', '700')};
      }

      &:active {
        background-color: ${color('action', '800')};
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_E_VARIANT.SECONDARY &&
    css`
      color: ${color('neutral', '500')};
      background-color: ${color('neutral', 'white')};
      border: 1px solid ${color('neutral', '200')};
      box-shadow: 0 1px 3px ${rgba(0, 0, 0, 0.1)};
    `}

  ${({ $variant }) =>
    $variant === BUTTON_E_VARIANT.TERTIARY &&
    css`
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      color: ${color('neutral', '500')};
      text-decoration: underline;

      &:disabled {
        text-decoration: none;
        text-decoration-line: underline;
        text-decoration-color: transparent;
      }

      &:active,
      &:focus,
      &:hover {
        color: ${color('neutral', '500')};
        border: 1px solid ${color('neutral', '200')};
        text-decoration: none;
        text-decoration-line: underline;
        text-decoration-color: transparent;
      }
    `}


  ${({ $variant }) =>
    ($variant === BUTTON_E_VARIANT.TERTIARY ||
      $variant === BUTTON_E_VARIANT.SECONDARY) &&
    css`
      &:focus,
      &:hover {
        background-color: ${color('neutral', 'white')};
      }

      &:active {
        background-color: ${color('neutral', '100')};
      }
    `}

  ${({ $variant }) =>
    ($variant === BUTTON_E_VARIANT.PRIMARY ||
      $variant === BUTTON_E_VARIANT.SECONDARY ||
      $variant === BUTTON_E_VARIANT.TERTIARY) &&
    css`
      &:focus,
      &:hover {
        box-shadow: 0 1px 3px ${rgba(0, 0, 0, 0.1)},
          0 0 0 3px ${color('action', '100')};
      }

      &:active {
        box-shadow: 0 1px 3px transparent, 0 0 0 3px ${color('action', '100')};
      }

      &:disabled {
        &,
        &:hover,
        &:active,
        &:focus {
          background: ${color('neutral', '000')};
          border: 1px solid ${color('neutral', '200')};
          box-shadow: none;
          color: ${color('neutral', '300')};
          cursor: not-allowed;
        }
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_E_VARIANT.DANGER &&
    css`
      background-color: ${color('danger', '700')};
      border: 1px solid ${color('danger', '700')};
      color: ${color('neutral', 'white')};

      &:focus,
      &:hover {
        background-color: ${color('danger', '800')};
        box-shadow: 0 1px 3px ${rgba(0, 0, 0, 0.1)},
          0 0 0 3px ${color('danger', '100')};
      }

      &:active {
        background-color: ${color('danger', '900')};
        box-shadow: 0 1px 3px transparent, 0 0 0 3px ${color('danger', '100')};
      }

      &:disabled {
        &,
        &:hover,
        &:active,
        &:focus {
          background: ${color('danger', '000')};
          border: 1px solid ${color('neutral', '200')};
          box-shadow: none;
          color: ${color('neutral', '300')};
          cursor: not-allowed;
        }
      }
    `}
`
