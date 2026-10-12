import styled from 'styled-components'
import { colorValue } from '@royalnavy/design-tokens'

export const StyledSheetList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;

  a,
  a:hover {
    color: ${colorValue('neutral', 'white')};
    text-decoration: none;
  }
`
