import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'
import { IconNotifications } from '@royalnavy/icon-library'

export const StyledIconNotifications: typeof IconNotifications = styled(
  IconNotifications
)`
  width: 24px;
  height: 24px;
  color: ${themeColor('neutral', '400')};
`
