import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { StyledDataListProps } from './StyledDataList'

const { spacing } = selectors

export const StyledItem = styled.div<StyledDataListProps>`
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
