import { components } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledLabel } from './StyledLabel'

const { spacing } = selectors

export const StyledValueContainer = styled(components.ValueContainer)`
  padding: 0 0 0 ${spacing('6')};
  height: inherit;

  &.rn-select__value-container--has-value ${StyledLabel} {
    transform: translate(${spacing('6')}, ${spacing('2')}) scale(0.8);
  }
`
