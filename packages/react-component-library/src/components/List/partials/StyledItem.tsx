import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

interface StyledItemProps {
  $isInactive: boolean
}

export const StyledItem = styled.li<StyledItemProps>`
  background-color: ${({ $isInactive }) =>
    $isInactive ? color('neutral', '000') : color('neutral', 'white')};
  margin-bottom: 0;

  &:not(:last-child) {
    box-shadow: inset 0px -1px 0px 0px ${color('neutral', '100')};
  }
`
