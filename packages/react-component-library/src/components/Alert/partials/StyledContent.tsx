import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledContent = styled.div`
  width: 100%;
  padding: ${spacing('4')} ${spacing('4')} ${spacing('4')} 0;
`
