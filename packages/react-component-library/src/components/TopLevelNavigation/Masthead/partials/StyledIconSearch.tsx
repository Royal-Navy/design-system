import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { IconSearch } from '@defencedigital/icon-library'

const { color } = selectors

export const StyledIconSearch = styled(IconSearch)`
  width: 24px;
  height: 24px;
  color: ${color('neutral', '400')};
`
