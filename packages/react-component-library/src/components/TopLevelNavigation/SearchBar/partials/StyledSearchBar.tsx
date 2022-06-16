import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { zIndex } = selectors

interface StyledSearchBarProps {
  $width: string
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
  z-index: ${zIndex('dropdown', 1)};
  display: block;
  margin-top: -1px;
  position: absolute;
  width: ${({ $width }) => $width};
`
