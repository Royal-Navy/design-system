import { styled, css } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

import { StyledContainer } from './StyledContainer'
import { StyledSwitchOption } from './StyledSwitchOption'
import { StyledLegend } from './StyledLegend'
import { ComponentSizeType, COMPONENT_SIZE } from '../../Forms'

interface StyledSwitchProps {
  $size?: ComponentSizeType
  $isDisabled?: boolean
  $isInvalid?: boolean
}

export const StyledSwitch = styled.div<StyledSwitchProps>`
  position: relative;
  font-size: ${fontSize('m')};

  ${({ $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      & {
        font-size: ${fontSize('s')};

        ${StyledContainer} {
          height: 33px;
        }

        ${StyledSwitchOption} {
          &:first-of-type {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }

          &:last-of-type {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          }

          &:focus-within,
          &:active {
            box-shadow: 0 0 0 1px ${themeColor('action', '500')},
              0 0 0 3px ${themeColor('action', '100')};
          }
        }
      }
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ${StyledContainer} {
        background-color: ${themeColor('neutral', '000')};
      }
    `}

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      & {
        ${StyledContainer} {
          box-shadow: 0 0 0 2px ${themeColor('danger', '800')};
        }

        ${StyledLegend} {
          color: ${themeColor('danger', '800')};
        }

        ${StyledSwitchOption} {
          border-top-color: ${themeColor('danger', '800')};
          border-bottom-color: ${themeColor('danger', '800')};

          &:first-of-type {
            border-left-color: ${themeColor('danger', '800')};
          }

          &:last-of-type {
            border-right-color: ${themeColor('danger', '800')};
          }

          &:focus-within,
          &:active {
            z-index: 1;
            outline: none;
            border-color: ${themeColor('action', '500')};
            box-shadow: 0 0 0 2px ${themeColor('action', '500')},
              0 0 0 5px ${themeColor('action', '100')};
          }
        }
      }
    `}
`
