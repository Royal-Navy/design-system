import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ProgressIndicator } from './index'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export default {
  component: ProgressIndicator,
  title: 'Progress Indicator',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const StyledProgressIndicator = styled(ProgressIndicator)`
  position: absolute;
  transform: translate(-50%, -50%);
`

export const Default: Story<ComponentWithClass> = (props) => (
  <div style={{ height: '10rem' }}>
    <StyledProgressIndicator {...props} />
  </div>
)
