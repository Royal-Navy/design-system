import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledValue = styled.div`
  position: absolute;
  display: inline-block;
  transform: translate(-50%, -160%);
  font-size: ${fontSize('m')};
  color: ${color('neutral', '500')};
  padding: ${spacing('3')} ${spacing('4')};
  border-radius: 8px;
  border: 1px solid ${color('neutral', '200')};
  font-weight: 600;
  background-color: ${color('neutral', 'white')};
  cursor: pointer;
`
