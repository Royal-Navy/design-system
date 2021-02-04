import styled, { css } from 'styled-components'

interface StyledRowsProps {
  defaultStyles: boolean
}

export const StyledRows = styled.div<StyledRowsProps>`
  ${({ defaultStyles }) =>
    defaultStyles &&
    css`
      width: auto;
      height: auto;
      min-height: 4rem;
    `}
`
