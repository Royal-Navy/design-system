import styled from 'styled-components'
import { color, fontSize, colorValue } from '@royalnavy/design-tokens'

export const StyledNotificationDot = styled.span`
  position: absolute;
  top: -7px;
  right: -5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: ${color('danger', '600')};
  border: 3px solid ${colorValue('neutral', '700')};
  color: ${colorValue('neutral', 'white')};
  font-size: ${fontSize('s')};
  font-weight: 600;
`
