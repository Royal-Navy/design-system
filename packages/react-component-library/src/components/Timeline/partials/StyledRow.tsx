import styled from 'styled-components'

import { StyledSubComponentProps } from './StyledSubComponent'

export const StyledRow = styled.div<StyledSubComponentProps>`
  display: flex;
  height: 4rem;

  ${({ $css }) => $css}
`
