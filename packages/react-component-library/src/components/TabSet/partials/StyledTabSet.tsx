import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export interface StyledTabSetProps {
  $isScrollable: boolean
}

export const StyledTabSet = styled.article<StyledTabSetProps>`
  display: flex;
  flex-flow: column;
  background-color: ${color('neutral', 'white')};
`
