import styled from 'styled-components'

interface StyledSubRowProps {
  $depth: number
}

export const StyledControlCell = styled.div<StyledSubRowProps>`
  padding-left: ${({ $depth }) => `${$depth * 2}rem`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
