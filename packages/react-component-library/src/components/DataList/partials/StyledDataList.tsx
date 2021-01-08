import styled, { css } from 'styled-components'

export interface StyledDataListProps {
  $isCollapsible: boolean
  $isOpen?: boolean
}

export const StyledDataList = styled.dl<StyledDataListProps>`
  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      border-radius: 3px;
    `}
`
