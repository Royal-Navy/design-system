import styled from 'styled-components'

import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledContents = styled.main`
  border-top: solid ${spacing('px')} ${color('neutral', '100')};
`
