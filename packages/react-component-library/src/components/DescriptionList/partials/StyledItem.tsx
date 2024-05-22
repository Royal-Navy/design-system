import styled, { css } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'
import { StyledDescriptionListProps } from './StyledDescriptionList'

export const StyledItem = styled.div<StyledDescriptionListProps>`
  display: flex;
  padding: ${spacing('4')} ${spacing('2')};
  align-items: center;
  justify-content: space-between;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      padding: ${spacing('4')};
    `}
`
