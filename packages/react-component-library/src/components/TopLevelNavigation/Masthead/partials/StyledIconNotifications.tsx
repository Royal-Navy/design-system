import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { IconNotifications } from '@defencedigital/icon-library'

const { color } = selectors

export const StyledIconNotifications = styled(IconNotifications)`
  width: 18px;
  height: 18px;
  color: ${color('neutral', '400')};
`
