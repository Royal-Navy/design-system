import { styled, css } from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'

const LABEL_FONT_SIZE = {
  [COMPONENT_SIZE.FORMS]: fontSize('m'),
  [COMPONENT_SIZE.SMALL]: fontSize('base'),
}

const LABEL_CONTAINER_PADDING = {
  [COMPONENT_SIZE.FORMS]: '0 12px 0 0',
  [COMPONENT_SIZE.SMALL]: '0 8px 0 0',
}

const LABEL_DESCRIPTION_PADDING = {
  [COMPONENT_SIZE.FORMS]: '12px 12px 12px 0',
  [COMPONENT_SIZE.SMALL]: '8px 8px 8px 0',
}

interface StyledLabelProps {
  $hasContainer?: boolean
  $hasLabel?: boolean
  $hasDescription?: boolean
  $isDisabled: boolean
  $size: ComponentSizeType
}

export const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ $hasContainer, $isDisabled }) =>
    color('neutral', $isDisabled && !$hasContainer ? '300' : '400')};
  font-size: ${({ $size }) => LABEL_FONT_SIZE[$size]};
  pointer-events: none;
  padding: 4px;

  ${({ $hasContainer, $size }) =>
    $hasContainer &&
    css`
      padding: ${LABEL_CONTAINER_PADDING[$size]};
    `}

  ${({ $hasDescription, $size }) =>
    $hasDescription &&
    css`
      padding: ${LABEL_DESCRIPTION_PADDING[$size]};
    `}

  ${({ $hasLabel }) =>
    !$hasLabel &&
    css`
      padding: unset;
    `}
`
