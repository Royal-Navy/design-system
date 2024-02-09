import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconSearch } from '@royalnavy/icon-library'

const { color } = selectors

export const StyledIconSearch: typeof IconSearch = styled(IconSearch)`
  width: 24px;
  height: 24px;
  color: ${color('neutral', '400')};
`
