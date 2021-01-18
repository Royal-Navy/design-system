import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Checkbox } from '../../Checkbox'

const { spacing } = selectors

export const StyledDontShow = styled(Checkbox)`
  padding-top: ${spacing('3')};
  padding-bottom: ${spacing('3')};
`
