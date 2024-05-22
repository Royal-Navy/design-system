import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'
import { IconChevronRight } from '@royalnavy/icon-library'

export const StyledIcon: typeof IconChevronRight = styled(IconChevronRight)`
  display: inline-block;
  color: ${color('neutral', '200')};
`
