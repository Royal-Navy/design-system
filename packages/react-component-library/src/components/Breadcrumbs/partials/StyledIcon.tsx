import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { IconChevronRight } from '@defencedigital/icon-library'

const { color } = selectors

export const StyledIcon = styled(IconChevronRight)`
  display: inline-block;
  color: ${color('neutral', '200')};
`
