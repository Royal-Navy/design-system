import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { zIndex } = selectors

export const StyledSearchBar = styled.div`
  z-index: ${zIndex('dropdown', 1)};
  display: block;
  margin-top: -1px;
  position: absolute;
  width: 100%;
`
