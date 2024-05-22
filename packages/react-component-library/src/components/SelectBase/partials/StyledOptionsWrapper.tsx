import styled, { css } from 'styled-components'
import { color, zIndex } from '@royalnavy/design-tokens'

import { BORDER_RADIUS } from '../../../styled-components'
import { COMPONENT_SIZE } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

interface StyledOptionsWrapperProps {
  $isVisible: boolean
}

function getTopBorder() {
  return css`
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 1px;
      width: 100%;
      border-bottom: 1px solid ${color('neutral', '200')};
    }
  `
}

function getBoxShadow() {
  return css`
    &::after {
      z-index: ${zIndex('dropdown', 0)};
      content: '';
      position: absolute;
      top: -${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]};
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 3px ${color('action', '500')},
        0 0 0 6px ${color('action', '100')}, 0 2px 22px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      border-radius: ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};
    }
  `
}

export const StyledOptionsWrapper = styled.div<StyledOptionsWrapperProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  z-index: ${zIndex('dropdown', 1)};
  position: absolute;
  width: 100%;
  background: ${color('neutral', 'white')};
  border-radius: 0 0 ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]}
    ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};
  margin-bottom: 5px;
  ${getTopBorder()}
  ${getBoxShadow()}
`
