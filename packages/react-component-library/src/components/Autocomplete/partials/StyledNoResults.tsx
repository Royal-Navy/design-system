import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

export const StyledNoResults = styled.span`
  height: ${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]};
  padding: 0 11px;
  display: flex;
  align-items: center;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};

  &,
  * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
