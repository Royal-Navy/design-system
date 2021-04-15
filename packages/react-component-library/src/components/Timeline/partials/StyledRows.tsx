import styled, { css } from 'styled-components'

interface StyledRowsProps {
  $width: number
  defaultStyles: boolean
}

export const StyledRows = styled.div<StyledRowsProps>`
  width: ${({ $width }) =>
    css`
      ${$width}px
    `};

  ${({ defaultStyles }) =>
    defaultStyles &&
    css`
      height: auto;
      min-height: 4rem;
    `}
`
