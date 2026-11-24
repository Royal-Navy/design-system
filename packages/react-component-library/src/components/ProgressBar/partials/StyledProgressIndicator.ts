import { animation, themeColor, spacing } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'
import { StyledProgressBarProps } from './StyledProgressBar'

export const StyledProgressIndicator = styled.div<StyledProgressBarProps>`
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? themeColor('neutral', '300') : themeColor('supa', '500')};
  height: ${({ $height }) => spacing($height)};
  transition: width ${animation('default')};
`
