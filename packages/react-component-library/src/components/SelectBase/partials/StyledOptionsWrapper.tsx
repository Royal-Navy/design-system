import styled, { css } from 'styled-components'
import { color, zIndex } from '@royalnavy/design-tokens'

import { BORDER_RADIUS } from '../../../styled-components'
import { COMPONENT_SIZE } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

type PopupPosition = 'above' | 'below'

interface StyledOptionsWrapperProps {
  $isVisible: boolean
  $position?: PopupPosition
}

function getTopBorder(position: PopupPosition = 'below') {
  if (position === 'below') {
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
  return css`
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      border-top: 1px solid ${color('neutral', '200')};
    }
  `
}

function getBoxShadow(position: PopupPosition = 'below') {
  if (position === 'below') {
    return css`
      &::after {
        z-index: ${zIndex('dropdown', 0)};
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: -${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]};
        bottom: 0;
        box-shadow: 0 0 0 3px ${color('action', '500')},
          0 0 0 6px ${color('action', '100')}, 0 2px 22px rgba(0, 0, 0, 0.2);
        pointer-events: none;
        border-radius: ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};
      }
    `
  }

  return css`
    &::before {
      z-index: ${zIndex('dropdown', 0)};
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]};
      top: 0;
      box-shadow: 0 0 0 3px ${color('action', '500')},
      0 0 0 6px ${color('action', '100')}, 0 2px 22px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      border-radius: ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};
  `
}

export const StyledOptionsWrapper = styled.div<StyledOptionsWrapperProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  z-index: ${zIndex('dropdown', 1)};
  position: absolute;
  width: 100%;

  margin-bottom: 5px;
  border-radius: 0 0 ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]}
  ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};

  ${({ $position }) =>
    $position === 'above' &&
    css`
      bottom: 100%;
      top: auto;
      margin-bottom: 0;
      margin-top: 5px;
      border-radius: ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]} ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]} 0 0;
    `}
  background: ${color('neutral', 'white')};
  ${({ $position }) => getTopBorder($position)}
  ${({ $position }) => getBoxShadow($position)}
`
