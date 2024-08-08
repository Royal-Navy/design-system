import styled, { css } from 'styled-components'

export type StyledTextProps = {
  $align: string
  $lineHeight: string
  $textColor: string
  $backgroundColor: string
  $size: string
  $noWrap: boolean
}

export const StyledTextComponent = styled.div<StyledTextProps>`
  font-size: ${({ $size }) => $size};
  line-height: ${({ $lineHeight }) => $lineHeight};
  text-align: ${({ $align }) => $align};

  color: ${({ $textColor }) => $textColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  ${({ $noWrap }) =>
    $noWrap &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`
