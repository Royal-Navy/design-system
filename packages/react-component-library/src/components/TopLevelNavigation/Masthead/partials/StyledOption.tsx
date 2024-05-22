import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { MAIN_HEIGHT } from './constants'

interface StyledOptionProps {
  $isActive?: boolean
}

export const StyledOption = styled.button<StyledOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MAIN_HEIGHT};
  width: ${MAIN_HEIGHT};
  margin: 0;

  text-decoration: none;
  background-color: ${({ $isActive }) =>
    color('neutral', $isActive ? '400' : 'white')};
  border: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(${color('action', '700')}, 0.5);
  }

  > svg {
    fill: ${({ $isActive }) => color('neutral', $isActive ? 'white' : '400')};
  }
`
