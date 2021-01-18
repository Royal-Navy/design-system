import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledToastContent = styled.div`
  padding: ${spacing('4')} ${spacing('6')} ${spacing('6')} ${spacing('6')};
`
