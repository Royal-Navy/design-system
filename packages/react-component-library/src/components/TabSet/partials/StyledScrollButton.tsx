import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'
import { ACTIVE_TAB_HEIGHT } from '../../TabBase/partials/StyledTab'

export const StyledScrollButton = styled.button`
  background: ${color('neutral', 'white')};
  border: none;
  color: ${color('action', '500')};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  height: ${ACTIVE_TAB_HEIGHT};
  width: 40px;
  align-items: center;
`
