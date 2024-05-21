import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing('10')} ${spacing('8')};
  background-color: ${color('neutral', '500')};
`
