import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

import { StyledAvatar } from '../../../Avatar/partials/StyledAvatar'

export const StyledWrapper = styled.div`
  a,
  a:hover {
    color: ${color('neutral', '300')};
    text-decoration: none;
  }

  &:hover {
    ${StyledAvatar} {
      background: ${color('action', '500')};
    }

    strong {
      color: ${color('action', '500')};
    }
  }
`
