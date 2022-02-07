import styled, { css } from 'styled-components'

export interface StyledDescriptionListProps {
  $isCollapsible: boolean
  $isOpen?: boolean
}

export const StyledDescriptionList = styled.dl<StyledDescriptionListProps>`
  overflow: hidden;
  transition: 200ms max-height linear;
  margin-block: 0;

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
