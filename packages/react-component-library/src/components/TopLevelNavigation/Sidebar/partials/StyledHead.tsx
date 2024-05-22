import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${spacing('8')} ${spacing('6')};
  background-color: ${color('neutral', '800')};
`
