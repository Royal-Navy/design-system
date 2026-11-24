import { styled, css } from 'styled-components'
import { themeColor, shadow } from '@royalnavy/design-tokens'

import { StyledLabel } from './StyledLabel'
import { Appearance } from '../Toast'

interface StyledToastProps {
  $appearance: Appearance
}

const colors = {
  success: themeColor('success', '500'),
  error: themeColor('danger', '500'),
  warning: themeColor('warning', '500'),
  info: themeColor('action', '500'),
}

export const StyledToast = styled.div<StyledToastProps>`
  box-shadow: ${shadow('2')};
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeColor('neutral', '100')};
  border-radius: 4px;
  width: 340px;
  background-color: ${themeColor('neutral', 'white')};

  ${({ $appearance }) => css`
    ${StyledLabel} > svg {
      color: ${colors[$appearance]};
    }
  `}
`
