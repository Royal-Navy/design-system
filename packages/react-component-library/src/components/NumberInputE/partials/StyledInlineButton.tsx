import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'

export interface StyledInlineButtonProps {
  $size: ComponentSizeType
}

const { color } = selectors

export const StyledInlineButton = styled.button<StyledInlineButtonProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  height: 28px;
  width: 28px;
  align-items: center;

  background: transparent;
  margin: 8px;
  padding: 0;
  outline: 0;
  border: 0;
  border-radius: 8px;

  color: ${color('action', '700')};

  &:hover {
    background-color: ${color('action', '000')};
  }

  &:focus {
    background-color: ${color('action', '100')};
  }

  & > svg {
    height: 16px;
    width: 16px;
  }

  ${({ $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      height: 20px;
      width: 20px;
      margin: 6px;
      border-radius: 3px;

      & > svg {
        height: 12px;
        width: 12px;
      }
    `}

  &:disabled {
    color: ${color('neutral', '300')};

    &:hover {
      background-color: unset;
    }
  }
`
