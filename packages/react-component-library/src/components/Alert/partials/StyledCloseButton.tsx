import styled from 'styled-components'
import { fontSize, spacing, mq } from '@royalnavy/design-tokens'

import {
  ALERT_CLOSE_COLOR,
  ALERT_CLOSE_BACKGROUND_COLOR_HOVER,
  ALERT_CLOSE_BACKGROUND_COLOR,
  ALERT_CLOSE_COLOR_HOVER,
} from '../constants'

export const StyledCloseButton = styled.button`
  flex-basis: 100%;
  border: none;
  font-size: ${fontSize('base')};
  color: ${ALERT_CLOSE_COLOR};
  font-weight: 600;
  transition: all 0.3s;
  border-radius: 2px;
  padding: ${spacing('4')};
  margin-top: ${spacing('4')};
  background-color: ${ALERT_CLOSE_BACKGROUND_COLOR};
  text-align: center;

  ${mq({ gte: 'xs' })`
    flex-basis: auto;
    width: ${spacing('18')};
  `}

  &:hover {
    background-color: ${ALERT_CLOSE_BACKGROUND_COLOR_HOVER};
    color: ${ALERT_CLOSE_COLOR_HOVER};
    cursor: pointer;
  }
`
