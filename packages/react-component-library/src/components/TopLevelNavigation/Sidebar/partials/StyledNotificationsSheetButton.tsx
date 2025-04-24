import React from 'react'
import styled, { css } from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

import { SheetButton, SheetButtonProps } from '../../Sheet/SheetButton'
import { StyledNotificationDot } from './StyledNotificationDot'
import { StyledNotificationsLabel } from './StyledNotificationsLabel'

interface StyledNotificationsSheetButtonProps extends SheetButtonProps {
  $isOpen: boolean
}

export const StyledNotificationsSheetButton = styled<
  React.ComponentType<StyledNotificationsSheetButtonProps>
>(SheetButton)`
  display: flex;
  align-items: center;
  padding: ${spacing('3')};
  margin-bottom: ${spacing('5')};
  white-space: nowrap;

  svg {
    color: ${color('neutral', '100')};
    width: 20px;
    height: 20px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      width: 100%;
      padding: ${spacing('8')} ${spacing('7')};
      margin: unset;

      svg {
        width: 1.5rem;
        margin-left: ${spacing('2')};
      }

      &::before {
        position: absolute;
        top: 1rem;
        left: 2rem;
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${color('danger', '600')};
        border-radius: 9999px;
        border: 2px solid ${color('neutral', '700')};
      }

      ${StyledNotificationDot} {
        position: relative;
        top: unset;
        right: unset;
        order: 3;
        width: 25px;
        height: 25px;
      }

      ${StyledNotificationsLabel} {
        display: inline-block;
      }
    `}
`
