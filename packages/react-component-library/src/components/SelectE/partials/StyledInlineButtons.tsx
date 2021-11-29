import styled from 'styled-components'

import { StyledInlineButton } from './StyledInlineButton'

export const StyledInlineButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  ${StyledInlineButton} + ${StyledInlineButton} {
    margin-left: 0;
  }
`
