import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

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
  border: 3px solid ${color('neutral', '700')};
  color: ${color('neutral', 'white')};
  font-size: ${fontSize('s')};
  font-weight: 600;
`
