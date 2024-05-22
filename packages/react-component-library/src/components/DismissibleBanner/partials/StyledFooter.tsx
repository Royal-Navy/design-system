import { color, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledFooter = styled.div`
  background: ${color('neutral', '000')};
  display: flex;
  justify-content: space-between;
  padding: ${spacing('4')};
`
