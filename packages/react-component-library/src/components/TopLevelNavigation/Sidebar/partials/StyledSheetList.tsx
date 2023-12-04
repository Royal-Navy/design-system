import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

export const StyledSheetList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;

  a,
  a:hover {
    color: ${color('neutral', 'white')};
    text-decoration: none;
  }
`
