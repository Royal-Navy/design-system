import { css } from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../Forms'

export const CONTAINER_BORDER_RADIUS = {
  [COMPONENT_SIZE.FORMS]: '15px',
  [COMPONENT_SIZE.SMALL]: '10px',
}

export const CONTAINER_PADDING_LEFT = {
  [COMPONENT_SIZE.FORMS]: spacing('13'),
  [COMPONENT_SIZE.SMALL]: spacing('12'),
}

export const CHECKMARK_LEFT_IN_CONTAINER = {
  [COMPONENT_SIZE.FORMS]: '12px',
  [COMPONENT_SIZE.SMALL]: '8px',
}

const CONTAINER_FOCUS_RING = {
  [COMPONENT_SIZE.FORMS]: { inner: '2px', outer: '5px' },
  [COMPONENT_SIZE.SMALL]: { inner: '1px', outer: '3px' },
}

export function getContainerFocusStyles(size: ComponentSizeType) {
  const { inner, outer } = CONTAINER_FOCUS_RING[size]

  return css`
    &:focus-within,
    &:active {
      outline: none;
      border-color: ${color('action', '500')};
      box-shadow: 0 0 0 ${inner} ${color('action', '500')},
        0 0 0 ${outer} ${color('action', '100')};
    }
  `
}
