import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'
import { Badge, BadgeProps } from '../../Badge'

const { spacing } = selectors

export const StyledBadge = styled(Badge)<BadgeProps>`
  transform: translateY(-1px);
  margin-left: ${spacing('2')};
`
