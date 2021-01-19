import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, fontSize } = selectors

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
