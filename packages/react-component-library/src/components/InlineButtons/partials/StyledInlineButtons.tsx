import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

import { StyledIconWrapper } from './StyledIconWrapper'
import { StyledInlineButton } from './StyledInlineButton'

export const StyledInlineButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-left: 1px solid ${color('neutral', '200')};

  ${StyledInlineButton} + ${StyledInlineButton} {
    & > ${StyledIconWrapper} {
      margin-left: 0;
    }
  }
`

export const StyledInlineButtonsNoBorder = styled(StyledInlineButtons)`
  border-left: none;
`
