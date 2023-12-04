import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { FloatingBox } from '../../../primitives'
import { StyledArrow } from '../../../primitives/FloatingBox/partials/StyledArrow'
import { StyledContent } from '../../../primitives/FloatingBox/partials/StyledContent'

const { color } = selectors

export const StyledFloatingBox = styled(FloatingBox)`
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
