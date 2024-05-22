import styled, { css } from 'styled-components'
import { color } from '@royalnavy/design-tokens'

interface StyledAvatarProps {
  $dark?: boolean
}

export const StyledAvatar = styled.span<StyledAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: ${color('neutral', 'white')};
  color: ${color('neutral', '600')};
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: ${color('action', '500')};
    color: ${color('neutral', 'white')};
    cursor: pointer;
  }

  ${({ $dark }) =>
    $dark &&
    css`
      background: ${color('neutral', '400')};
      color: ${color('neutral', 'white')};
    `}
`
