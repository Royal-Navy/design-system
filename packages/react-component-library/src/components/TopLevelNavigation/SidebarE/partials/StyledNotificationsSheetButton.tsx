import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { SheetButton } from '../../Sheet/SheetButton'
import { StyledNotificationDot } from './StyledNotificationDot'
import { StyledNotificationsLabel } from './StyledNotificationsLabel'

const { spacing, color } = selectors

export const StyledNotificationsSheetButton = styled<any>(SheetButton)`
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

  ${({ isOpen }) =>
    isOpen &&
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
