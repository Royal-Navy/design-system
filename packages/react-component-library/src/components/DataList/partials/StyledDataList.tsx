import styled, { css } from 'styled-components'

export interface StyledDataListProps {
  $isCollapsible: boolean
  $isOpen?: boolean
}

export const StyledDataList = styled.dl<StyledDataListProps>`
  overflow: hidden;
  transition: 200ms max-height linear;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      border-radius: 3px;
      max-height: 100%;
    `}

  ${({ $isCollapsible, $isOpen }) =>
    $isCollapsible &&
    !$isOpen &&
    css`
      max-height: 37px;
    `}
`
