import styled from 'styled-components'

import { BORDER_RADIUS } from '../../../styled-components'
import { COMPONENT_SIZE } from '../../Forms'

export const StyledOptions = styled.ul`
  max-height: 230px;
  overflow-y: auto;
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  border-radius: 0 0 ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]}
    ${BORDER_RADIUS[COMPONENT_SIZE.FORMS]};

  &:focus {
    outline: none;
  }
`
