import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

const NO_RESULTS_FONT_SIZE = {
  [COMPONENT_SIZE.FORMS]: fontSize('m'),
  [COMPONENT_SIZE.SMALL]: fontSize('base'),
}

interface StyledNoResultsProps {
  $size: ComponentSizeType
}

export const StyledNoResults = styled.span<StyledNoResultsProps>`
  height: ${({ $size }) => TEXT_INPUT_INPUT_HEIGHT[$size]};
  padding: 0 11px;
  display: flex;
  align-items: center;
  color: ${color('neutral', '400')};
  font-size: ${({ $size }) => NO_RESULTS_FONT_SIZE[$size]};

  &,
  * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
