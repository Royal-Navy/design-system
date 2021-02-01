import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const { spacing } = selectors

interface StyledContentProps {
  $isActive: boolean
}

export const StyledContent = styled.div<StyledContentProps>`
  display: none;

  // Fix to ensure the first level SVGs in a content document
  // have appropriate padding underneath their headings.
  > svg {
    width: 100%;
    margin-top: ${spacing('8')};

    + ul,
    + ol {
      margin-left: 16px;
      padding-left: 0;
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      display: block;
    `}
`
