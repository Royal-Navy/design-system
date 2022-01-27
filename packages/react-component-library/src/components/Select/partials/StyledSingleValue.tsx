import { components } from 'react-select'
import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { fontSize, spacing } = selectors

export const StyledSingleValue = styled(components.SingleValue)`
  &&& {
    margin: ${spacing('4')} 0 0 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize('base')};
    max-width: calc(100% - 95px);
    overflow: visible;
  }
`
