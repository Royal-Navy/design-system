import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledProgressIndicator } from './partials/StyledProgressIndicator'
import { ProgressIndicator } from './index'

export default {
  component: ProgressIndicator,
  title: 'Progress Indicator',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const Wrapper = styled.div`
  height: 10rem;

  ${StyledProgressIndicator} {
    position: absolute;
    transform: translate(-50%, -50%);
  }
`

export const Default: Story<ComponentWithClass> = (props) => (
  <Wrapper>
    <ProgressIndicator {...props} />
  </Wrapper>
)
