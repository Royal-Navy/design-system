import styled, { css } from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

interface StyledLabelProps {
  $hasContainer?: boolean
  $hasLabel?: boolean
  $hasDescription?: boolean
  $isDisabled: boolean
}

export const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ $hasContainer, $isDisabled }) =>
    color('neutral', $isDisabled && !$hasContainer ? '300' : '400')};
  font-size: ${fontSize('m')};
  pointer-events: none;
  padding: 4px;

  ${({ $hasContainer }) =>
    $hasContainer &&
    css`
      padding: 0 12px 0 0;
    `}

  ${({ $hasDescription }) =>
    $hasDescription &&
    css`
      padding: 12px 12px 12px 0;
    `}

  ${({ $hasLabel }) =>
    !$hasLabel &&
    css`
      padding: unset;
    `}
`
