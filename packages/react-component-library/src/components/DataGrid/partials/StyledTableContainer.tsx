import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledLayoutProps } from './types'

export const StyledTableContainer = styled.div<StyledLayoutProps>`
  position: relative;

  overflow: ${({ $hasScrolling }) => ($hasScrolling ? 'auto' : 'hidden')};
  height: ${({ $hasScrolling }) => ($hasScrolling ? '100%' : 'inherit')};

  border-radius: 4px;
`
