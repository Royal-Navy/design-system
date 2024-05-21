import styled from 'styled-components'
import { fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledProgressIndicator = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  text-transform: uppercase;

  span {
    display: block;
    margin-top: ${spacing('4')};
    font-size: ${fontSize('s')};
    font-weight: 700;
  }
`
