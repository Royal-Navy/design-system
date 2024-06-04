import styled from 'styled-components'
import { getButtonStyles, StyledButtonProps } from './getButtonStyles'

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  ${getButtonStyles};
`
