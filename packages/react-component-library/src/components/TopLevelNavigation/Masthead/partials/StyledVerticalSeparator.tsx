import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { MAIN_HEIGHT } from './constants'

const { color } = selectors

export const StyledVerticalSeparator = styled.svg`
  height: ${MAIN_HEIGHT};
  width: 2px;

  > * {
    stroke: ${color('neutral', '100')};
    stroke-width: 2px;
  }
`
