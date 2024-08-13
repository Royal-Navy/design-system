import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'
import { StyledToggle } from './StyledToggle'

interface StyledOnIconProps {
  $isChecked: boolean
}

export const StyledOnIcon = styled.div<StyledOnIconProps>`
  color: ${({ $isChecked }) =>
    $isChecked ? color('action', '600') : color('neutral', '200')};
  display: flex;
  position: absolute;

  ${StyledToggle}:hover & {
    color: ${({ $isChecked }) => $isChecked && color('action', '700')}
`
