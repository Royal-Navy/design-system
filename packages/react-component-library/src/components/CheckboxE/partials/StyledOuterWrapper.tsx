import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledOuterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  padding: ${spacing('2')} 0;
`
