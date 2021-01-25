import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${spacing('8')} ${spacing('6')};
  background-color: ${color('neutral', '800')};
`
