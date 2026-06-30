import styled from 'styled-components'
import { spacing, colorValue } from '@royalnavy/design-tokens'

export const StyledUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing('10')} ${spacing('8')};
  background-color: ${colorValue('neutral', '500')};
`
