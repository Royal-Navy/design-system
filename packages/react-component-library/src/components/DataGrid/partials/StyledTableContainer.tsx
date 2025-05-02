import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledLayoutProps } from './types'

export const StyledTableContainer = styled.div<StyledLayoutProps>`
  position: relative;

  overflow: ${({ $hasScrolling }) => ($hasScrolling ? 'auto' : 'hidden')};
  height: ${({ $hasScrolling }) => ($hasScrolling ? '100%' : 'inherit')};

  border-bottom: 1px solid ${color('neutral', '200')};
  border-left: 1px solid ${color('neutral', '200')};
  border-right: 1px solid ${color('neutral', '200')};

  border-radius: 4px;
`
