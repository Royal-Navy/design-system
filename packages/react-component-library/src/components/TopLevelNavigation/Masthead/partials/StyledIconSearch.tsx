import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'
import { IconSearch } from '@royalnavy/icon-library'

export const StyledIconSearch: typeof IconSearch = styled(IconSearch)`
  width: 24px;
  height: 24px;
  color: ${color('neutral', '400')};
`
