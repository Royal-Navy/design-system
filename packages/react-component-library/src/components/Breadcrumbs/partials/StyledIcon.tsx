import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'
import { IconChevronRight } from '@royalnavy/icon-library'

export const StyledIcon: typeof IconChevronRight = styled(IconChevronRight)`
  display: inline-block;
  color: ${themeColor('neutral', '200')};
`
