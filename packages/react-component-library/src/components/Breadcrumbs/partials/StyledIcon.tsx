import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconChevronRight, SVGIconProps } from '@royalnavy/icon-library'

const { color } = selectors

export const StyledIcon = styled(IconChevronRight)`
  display: inline-block;
  color: ${color('neutral', '200')};
`
