import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import {
  ALERT_CLOSE_COLOR,
  ALERT_CLOSE_BACKGROUND_COLOR_HOVER,
  ALERT_CLOSE_BACKGROUND_COLOR,
  ALERT_CLOSE_COLOR_HOVER,
} from '../constants'

const { spacing, fontSize, breakpoint } = selectors

export const StyledCloseButton = styled.button`
  margin-left: auto;
  border: none;
  font-size: ${fontSize('base')};
  color: ${ALERT_CLOSE_COLOR};
  font-weight: 600;
  transition: all 0.3s;
  border-radius: 2px;
  padding: ${spacing('4')} ${spacing('10')};
  background-color: ${ALERT_CLOSE_BACKGROUND_COLOR_HOVER};

  @media only screen and (min-width: ${breakpoint('xs').breakpoint}) {
    position: absolute;
    background-color: ${ALERT_CLOSE_BACKGROUND_COLOR};
    margin-top: 0;
    top: ${spacing('4')};
    right: ${spacing('4')};
    bottom: ${spacing('4')};
    padding: ${spacing('2')};
    width: ${spacing('17')};
  }

  &:hover {
    background-color: ${ALERT_CLOSE_BACKGROUND_COLOR_HOVER};
    color: ${ALERT_CLOSE_COLOR_HOVER};
    cursor: pointer;
  }
`
