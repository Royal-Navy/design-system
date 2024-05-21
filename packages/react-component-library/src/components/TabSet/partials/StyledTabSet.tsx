import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export interface StyledTabSetProps {
  $isScrollable?: boolean
}

export const StyledTabSet = styled.article`
  display: flex;
  flex-flow: column;
  background-color: ${color('neutral', 'white')};
  height: 100%;
`
