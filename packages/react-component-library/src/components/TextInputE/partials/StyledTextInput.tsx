import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledTextInput = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  margin: ${spacing('6')} 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  width: 100%;
`
