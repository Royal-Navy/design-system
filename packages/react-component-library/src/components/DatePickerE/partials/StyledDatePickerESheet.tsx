import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

import { StyledArrow } from '../../../primitives/FloatingBox/partials/StyledArrow'
import { StyledContent } from '../../../primitives/FloatingBox/partials/StyledContent'
import { StyledFloatingBox } from '../../../primitives/FloatingBox/partials/StyledFloatingBox'

const { color } = selectors

export const StyledDatePickerESheet = styled(StyledFloatingBox)`
  padding: 0;

  ${StyledArrow} {
    display: none;
  }

  ${StyledContent} {
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 0 3px ${color('action', '500')},
      0 0 0 6px ${color('action', '100')}, 0 2px 22px rgba(0, 0, 0, 0.2);
  }
`
