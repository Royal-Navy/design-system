import styled from 'styled-components'
import { spacing, colorValue } from '@royalnavy/design-tokens'

export const StyledHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${spacing('8')} ${spacing('6')};
  background-color: ${colorValue('neutral', '800')};
`
