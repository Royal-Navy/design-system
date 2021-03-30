import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'

import { ProgressIndicator } from './index'

export default {
  component: ProgressIndicator,
  title: 'Progress Indicator',
} as Meta

const StyledProgressIndicator = styled(ProgressIndicator)`
  position: absolute;
  transform: translate(-50%, -50%);
`

export const Default = (props: any) => (
  <div style={{ height: '10rem' }}>
    <StyledProgressIndicator {...props} />
  </div>
)
