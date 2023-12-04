import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledButton } from './StyledButton'

const { color, mq, spacing } = selectors

interface StyledFooterProps {
  $hasTertiaryButton: boolean
}

export const StyledFooter = styled.footer<StyledFooterProps>`
  background-color: ${color('neutral', 'white')};
  display: flex;
  justify-content: ${({ $hasTertiaryButton }) =>
    $hasTertiaryButton ? 'space-between' : 'flex-end'};
  width: 100%;
  padding: ${spacing('8')};
  flex-direction: column-reverse;
  border-top: 1px solid ${color('neutral', '100')};

  ${StyledButton} + ${StyledButton} {
    margin-bottom: ${spacing('4')};
  }

  ${({ $hasTertiaryButton }) =>
    mq({ gte: 'xs' })`
      flex-direction: row;

      ${StyledButton} + ${StyledButton} {
        margin-bottom: 0;
      }

      ${
        $hasTertiaryButton &&
        css`
          ${StyledButton}:nth-child(2) {
            margin-left: auto;
          }
        `
      }
  `}
`
