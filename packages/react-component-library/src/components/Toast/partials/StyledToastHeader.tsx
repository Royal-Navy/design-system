import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledToastHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: ${spacing('6')} ${spacing('6')} 0 ${spacing('6')};
`
