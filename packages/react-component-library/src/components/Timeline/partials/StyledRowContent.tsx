import styled from 'styled-components'

import { StyledSubComponentProps } from './StyledSubComponent'

export const StyledRowContent = styled.div<StyledSubComponentProps>`
  position: relative;
  width: 100%;

  ${({ $css }) => $css}
`
