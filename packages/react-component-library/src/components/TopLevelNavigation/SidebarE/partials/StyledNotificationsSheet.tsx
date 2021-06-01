import styled from 'styled-components'

import { Sheet } from '../../Sheet/Sheet'
import { StyledFloatingBox } from '../../../../primitives/FloatingBox/partials/StyledFloatingBox'

export const StyledNotificationsSheet = styled(Sheet)`
  display: flex;
  justify-content: center;

  ${StyledFloatingBox} {
    transform: translate(10px, calc(-100% + 30px));
  }
`
