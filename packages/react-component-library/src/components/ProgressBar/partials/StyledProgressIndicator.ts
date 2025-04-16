import { animation, color, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'
import { StyledProgressBarProps } from './StyledProgressBar'

export const StyledProgressIndicator = styled.div<StyledProgressBarProps>`
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? color('neutral', '300') : color('supa', '500')};
  height: ${({ $height }) => spacing($height)};
  transition: width ${animation('default')};
`
