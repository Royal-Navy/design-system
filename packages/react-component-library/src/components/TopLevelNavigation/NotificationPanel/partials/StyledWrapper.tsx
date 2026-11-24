import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

import { StyledAvatar } from '../../../Avatar/partials/StyledAvatar'

export const StyledWrapper = styled.div`
  a,
  a:hover {
    color: ${themeColor('neutral', '300')};
    text-decoration: none;
  }

  &:hover {
    ${StyledAvatar} {
      background: ${themeColor('action', '500')};
    }

    strong {
      color: ${themeColor('action', '500')};
    }
  }
`
