import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

interface StyledOffIconProps {
  $isChecked: boolean
}

export const StyledOffIcon = styled.div<StyledOffIconProps>`
  color: ${({ $isChecked }) => ($isChecked ? color('action', '400') : '#fff')};
  display: flex;
  position: absolute;
`
