import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, shadow } = selectors

export const StyledCardFrame = styled.div`
  border-radius: 3px;
  background-color: ${color("neutral", "white")};
  border: 1px solid ${color("neutral", "100")};
  box-shadow: ${shadow("1")};
`
