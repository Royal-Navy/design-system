import { styled, css } from 'styled-components'
import { color, zIndex } from '@royalnavy/design-tokens'

import { BORDER_RADIUS, BORDER_WIDTH } from '../../../styled-components'
import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

type PopupPosition = 'above' | 'below'

interface StyledOptionsWrapperProps {
  $isVisible: boolean
  $position: PopupPosition
  $size: ComponentSizeType
}

const SECONDARY_BORDER_WIDTH = {
  [COMPONENT_SIZE.SMALL]: '4px',
  [COMPONENT_SIZE.FORMS]: '6px',
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

function getBoxShadow(position: PopupPosition, size: ComponentSizeType) {
  const boxShadow = css`
    box-shadow: 0 0 0 ${BORDER_WIDTH[size]} ${color('action', '500')},
      0 0 0 ${SECONDARY_BORDER_WIDTH[size]} ${color('action', '100')},
      0 2px 22px rgba(0, 0, 0, 0.2);
  `

  if (position === 'below') {
    return css`
      &::after {
        z-index: ${zIndex('dropdown', 0)};
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: -${TEXT_INPUT_INPUT_HEIGHT[size]};
        bottom: 0;
        ${boxShadow}
        pointer-events: none;
        border-radius: ${BORDER_RADIUS[size]};
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
      bottom: -${TEXT_INPUT_INPUT_HEIGHT[size]};
      top: 0;
      ${boxShadow}
      pointer-events: none;
      border-radius: ${BORDER_RADIUS[size]};
    }
  `
}

export const StyledOptionsWrapper = styled.div<StyledOptionsWrapperProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  z-index: ${zIndex('dropdown', 1)};
  position: absolute;
  overflow: visible;
  width: 100%;

  margin-bottom: 5px;

  ${({ $position, $size }) =>
    $position === 'above'
      ? css`
          bottom: 100%;
          top: auto;
          margin-bottom: 0;
          margin-top: 5px;
          border-radius: ${BORDER_RADIUS[$size]} ${BORDER_RADIUS[$size]} 0 0;
        `
      : css`
          border-radius: 0 0 ${BORDER_RADIUS[$size]} ${BORDER_RADIUS[$size]};
        `}
  background: ${color('neutral', 'white')};
  ${({ $position }) => getTopBorder($position)}
  ${({ $position, $size }) => getBoxShadow($position, $size)}
`
