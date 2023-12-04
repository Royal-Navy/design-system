import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledNotRead } from './StyledNotRead'

const { color } = selectors

export const StyledItemNotRead = styled(StyledNotRead)`
  border: 1px solid ${color('neutral', '700')};
  top: 0;
  right: 0;
`
