import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

export const StyledNotRead = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 4px;
  background: ${color('action', '400')};
  position: absolute;
  top: 14px;
  right: 12px;
  border: 0;
`
