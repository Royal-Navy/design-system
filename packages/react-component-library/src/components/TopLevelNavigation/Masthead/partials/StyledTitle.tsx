import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const { spacing } = selectors

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
