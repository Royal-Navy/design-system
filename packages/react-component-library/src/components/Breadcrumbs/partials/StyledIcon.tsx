import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconChevronRight } from '@royalnavy/icon-library'

const { color } = selectors

export const StyledIcon: typeof IconChevronRight = styled(IconChevronRight)`
  display: inline-block;
  color: ${color('neutral', '200')};
`
