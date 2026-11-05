import { styled, css } from 'styled-components'

interface StyledInputWrapperProps {
  $hasSelectedBadges?: boolean
}

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  flex-grow: 1;

  ${({ $hasSelectedBadges }) =>
    $hasSelectedBadges &&
    css`
      min-width: 5rem;

      & > input {
        field-sizing: content;
      }
    `}
`
