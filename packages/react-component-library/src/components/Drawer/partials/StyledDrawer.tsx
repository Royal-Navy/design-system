import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledDrawerProps {
  $isOpen?: boolean
}

const { color, zIndex } = selectors

export const StyledDrawer = styled.div<StyledDrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  @include ${zIndex('overlay', 1)};
  overflow: hidden;
  background-color: ${color('neutral', 'white')};
  box-shadow: inset 1px 0px 0px 0px rgb(226, 233, 238),
    -1px 0px 3px 0px rgba(0, 0, 0, 0.04);

  margin-right: -280px;
  transition: ease-in-out margin-right 0.3s;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      margin-right: 0;
      transition: ease-in-out margin-right 0.3s;
    `}
`
