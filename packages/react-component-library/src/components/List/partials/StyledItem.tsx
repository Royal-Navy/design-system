import { themeColor } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

interface StyledItemProps {
  $isInactive: boolean
}

export const StyledItem = styled.li<StyledItemProps>`
  background-color: ${({ $isInactive }) =>
    $isInactive
      ? themeColor('neutral', '000')
      : themeColor('neutral', 'white')};
  margin-bottom: 0;

  &:not(:last-child) {
    box-shadow: inset 0px -1px 0px 0px ${themeColor('neutral', '100')};
  }
`
