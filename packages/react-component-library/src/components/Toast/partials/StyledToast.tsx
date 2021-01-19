import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { AppearanceTypes } from 'react-toast-notifications'

import { StyledToastLabel } from './StyledToastLabel'

interface StyledToastProps {
  $appearance?: AppearanceTypes
}

const { shadow, color, spacing } = selectors

const colors = {
  success: color('success', '500'),
  error: color('danger', '500'),
  warning: color('warning', '500'),
  info: color('action', '500'),
}

export const StyledToast = styled.div<StyledToastProps>`
  box-shadow: ${shadow('2')};
  display: flex;
  flex-direction: column;
  border: 1px solid ${color('neutral', '100')};
  border-radius: 4px;
  width: 340px;
  margin-bottom: ${spacing('6')};
  background-color: ${color('neutral', 'white')};

  ${({ $appearance }) => css`
    ${StyledToastLabel} > svg {
      color: ${colors[$appearance]};
    }
  `}
`
