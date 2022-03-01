import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { IconNotifications } from '@defencedigital/icon-library'

const { color } = selectors

export const StyledIconNotifications = styled(IconNotifications)`
  width: 24px;
  height: 24px;
  color: ${color('neutral', '400')};
`
