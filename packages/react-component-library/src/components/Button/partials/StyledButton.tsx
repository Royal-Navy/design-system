import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import {
  getButtonStyles,
  StyledButtonProps as BaseStyledButtonProps,
} from './getButtonStyles'

interface StyledButtonProps extends BaseStyledButtonProps {
  $showLoadingText: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  ${getButtonStyles};

  gap: ${({ $showLoadingText }) =>
    $showLoadingText ? spacing('4') : 'initial'};
`
