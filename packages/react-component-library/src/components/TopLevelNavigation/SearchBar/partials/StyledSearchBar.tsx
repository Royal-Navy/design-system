import styled from 'styled-components'
import { zIndex } from '@royalnavy/design-tokens'

interface StyledSearchBarProps {
  $width: string
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
  z-index: ${zIndex('dropdown', 1)};
  display: block;
  margin-top: -1px;
  position: relative;
  width: ${({ $width }) => $width};
`
