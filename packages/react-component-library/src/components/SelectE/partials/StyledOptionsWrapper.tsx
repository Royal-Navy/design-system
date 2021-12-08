import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { BORDER_RADIUS, BORDER_WIDTH } from '../../../styled-components'
import { COMPONENT_SIZE } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInputE/partials/StyledInput'
import { isFirefox } from '../../../helpers'

const { color, zIndex } = selectors

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

function getLightBoxShadow() {
  function getMargin() {
    if (isFirefox()) {
      return '-8px -3px -3px -3px'
    }

    return '-6px -3px -3px -3px'
  }

  return css`
    &::after {
      z-index: ${zIndex('dropdown', 0)};
      content: '';
      position: absolute;
      margin: ${getMargin()};
      top: calc(-2px - ${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]});
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 ${BORDER_WIDTH[COMPONENT_SIZE.FORMS]}
        ${color('action', '100')};
      pointer-events: none;
      border-radius: ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};
    }
  `
}

export const StyledOptionsWrapper = styled.div`
  z-index: ${zIndex('dropdown', 1)};
  position: absolute;
  width: 100%;
  background: ${color('neutral', 'white')};
  border: ${BORDER_WIDTH[COMPONENT_SIZE.FORMS]} solid ${color('action', '500')};
  border-top: none;
  border-radius: 0 0 ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]}
    ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};
  padding-top: 2px;
  margin-bottom: 5px;
  ${getTopBorder()}
  ${getLightBoxShadow()}
`
