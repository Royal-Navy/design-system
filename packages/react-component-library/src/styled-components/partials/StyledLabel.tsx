import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentSizeType } from '../../components/Forms'

const { animation, color, fontSize } = selectors

export interface StyledLabelProps {
  $hasContent: boolean
  $hasFocus: boolean
  $size?: ComponentSizeType
}

export const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  transition: all cubic-bezier(0, 0, 0.2, 1) ${animation('default')};
  pointer-events: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};
  text-overflow: ellipsis;
  white-space: nowrap;
`
