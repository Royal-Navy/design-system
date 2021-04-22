import { components } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledLabel } from './StyledLabel'

const { spacing } = selectors

export const StyledValueContainer = styled(components.ValueContainer)`
  position: initial;
  height: inherit;

  &&& {
    padding: 0 0 0 ${spacing('6')};
  }

  &.rn-select__value-container--has-value ${StyledLabel} {
    transform: translate(${spacing('6')}, 6px) scale(0.8);
  }
`
