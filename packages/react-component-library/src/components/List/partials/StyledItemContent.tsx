import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledItemContent = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: ${spacing('6')};
  cursor: pointer;
  text-align: left;
  width: 100%;
`
