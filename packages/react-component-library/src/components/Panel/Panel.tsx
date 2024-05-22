import React from 'react'
import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'

const StyledPanel = styled.div`
  background: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '100')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
`

export const Panel = (props: ComponentWithClass) => (
  <StyledPanel data-testid="panel" {...props} />
)
