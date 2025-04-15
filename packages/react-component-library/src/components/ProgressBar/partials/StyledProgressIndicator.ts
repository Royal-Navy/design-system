import {
  color,
  type Spacing,
  spacing,
  animation,
} from '@royalnavy/design-tokens'
import styled from 'styled-components'
import { StyledProgressBarProps } from './StyledProgressBar'

interface StyledProgressIndicatorProps extends StyledProgressBarProps {
  $height: Spacing
}

export const StyledProgressIndicator = styled.div<StyledProgressIndicatorProps>`
  background-color: ${({ $isDisabled }) => $isDisabled ? color('neutral', '300') : color('action', '600')};
  height: ${({$height})=> spacing($height)};
  transition: width ${animation('default')};
`
