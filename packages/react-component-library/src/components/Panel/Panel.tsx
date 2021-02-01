import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'

const { color } = selectors

const StyledPanel = styled.div`
  background: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '100')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
`

export const Panel: React.FC<ComponentWithClass> = (props) => (
  <StyledPanel data-testid="panel" {...props} />
)
