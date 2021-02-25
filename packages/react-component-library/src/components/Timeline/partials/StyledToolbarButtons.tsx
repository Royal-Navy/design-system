import styled  from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledIcon } from '../../Button/partials/StyledIcon'

const { spacing } = selectors

export const StyledToolbarButtons = styled.div`
  display: inline-block;
  margin: ${spacing('4')} ${spacing('6')};
  
  button {
    &:first-of-type {
      margin-right: ${spacing('4')};
    }

    ${StyledIcon} {
      margin-left: 0;
    }
  }
`
