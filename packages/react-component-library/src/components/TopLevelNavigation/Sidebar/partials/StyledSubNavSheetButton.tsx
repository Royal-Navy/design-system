import styled from 'styled-components'
import { spacing, colorValue } from '@royalnavy/design-tokens'

import { SheetButton } from '../../Sheet/SheetButton'

export const StyledSubNavSheetButton = styled(SheetButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  padding: 0;
  margin-right: ${spacing('4')};
  border-radius: 2px;
  border: none;
  background-color: transparent;
  overflow: hidden;

  &:hover {
    background-color: ${colorValue('neutral', '400')};
    cursor: pointer;

    svg {
      color: ${colorValue('neutral', 'white')};
    }
  }

  svg {
    color: ${colorValue('neutral', '100')};
  }
`
