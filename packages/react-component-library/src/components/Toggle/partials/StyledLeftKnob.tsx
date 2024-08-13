import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'
import { StyledToggle } from './StyledToggle'

interface StyledLeftKnobProps {
  $isChecked: boolean
}

export const StyledLeftKnob = styled.div<StyledLeftKnobProps>`
  width: 24px;
  height: 24px;
  background-color: ${color('action', '500')};
  border-radius: 50%;
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  left: 6px;

  ${StyledToggle}:hover & {
    background-color: ${color('action', '700')};
  }
`
