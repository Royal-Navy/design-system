import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledContent = styled.div`
  padding: ${spacing('6')};
`
