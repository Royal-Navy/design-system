import { components } from 'react-select'
import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

import { StyledLabel } from './StyledLabel'

const { spacing } = selectors

export const StyledValueContainer = styled(components.ValueContainer)`
  &&& {
    padding: 0 0 0 ${spacing('6')};
    position: initial;
    height: inherit;
  }

  &.rn-select__value-container--has-value ${StyledLabel} {
    transform: translate(${spacing('6')}, 6px) scale(0.8);
  }
`
