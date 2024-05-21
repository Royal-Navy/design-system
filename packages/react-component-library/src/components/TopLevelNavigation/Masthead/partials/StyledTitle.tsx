import { spacing } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

interface StyledTitleProps {
  $hasLogo: boolean
}

export const StyledTitle = styled.span<StyledTitleProps>`
  ${({ $hasLogo }) =>
    $hasLogo &&
    css`
      margin-left: ${spacing('4')};
    `}
`
