import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledNotificationsLabel = styled.span`
  flex: 1;
  text-align: left;
  color: ${color('neutral', '100')};
  font-size: ${fontSize('m')};
  margin-left: ${spacing('4')};
  white-space: nowrap;
  display: none;
  opacity: 1;
  transition: opacity 150ms linear;
`
