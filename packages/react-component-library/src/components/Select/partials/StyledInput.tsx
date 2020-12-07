import { components } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { fontSize, spacing } = selectors

export const StyledInput = styled(components.Input)`
  font-size: ${fontSize('base')};
  margin: ${spacing('6')} 0 0;
`
