import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'
import { IconSearch } from '@royalnavy/icon-library'

export const StyledIconSearch: typeof IconSearch = styled(IconSearch)`
  width: 24px;
  height: 24px;
  color: ${themeColor('neutral', '400')};
`
