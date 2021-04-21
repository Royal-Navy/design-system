import styled, { css } from 'styled-components'

interface StyledRowsProps {
  $width: number
  $hasDefaultStyles: boolean
}

export const StyledRows = styled.div<StyledRowsProps>`
  width: ${({ $width }) =>
    css`
      ${$width}px
    `};

  ${({ $hasDefaultStyles }) =>
    $hasDefaultStyles &&
    css`
      height: auto;
      min-height: 4rem;
    `}
`
