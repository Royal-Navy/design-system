import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, zIndex } = selectors

export const StyledHandle = styled.button`
  position: absolute;
  top: 1.15rem;
  right: -1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${color('action', '500')};
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  transition: 100ms opacity linear;
  z-index: ${zIndex('sidebar', 2)};

  &:hover {
    cursor: pointer;
  }

  > svg {
    color: ${color('neutral', 'white')};
  }
`
