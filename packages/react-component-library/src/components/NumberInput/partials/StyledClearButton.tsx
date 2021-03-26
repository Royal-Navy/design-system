import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledClearButtonProps {
  $isCondensed: boolean
}

const { color } = selectors

export const StyledClearButton = styled.button<StyledClearButtonProps>`
  background-color: ${color('neutral', 'white')};
  border: none;
  color: ${color('neutral', '300')};
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1rem;
  right: 54px;
  padding: unset;
  display: flex;
  align-items: center;

  ${({ $isCondensed }) =>
    $isCondensed &&
    css`
      right: 44px;

      & > svg {
        transform: scale(0.8);
      }
    `}
`
