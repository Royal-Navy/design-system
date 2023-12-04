import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledIconWrapper } from './StyledIconWrapper'
import { StyledInlineButton } from './StyledInlineButton'

const { color } = selectors

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
