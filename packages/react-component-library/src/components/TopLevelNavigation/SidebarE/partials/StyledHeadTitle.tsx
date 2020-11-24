import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize } = selectors

export const StyledHeadTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSize('l')};
  white-space: nowrap;
  opacity: 1;
  transition: opacity 150ms linear;
`
