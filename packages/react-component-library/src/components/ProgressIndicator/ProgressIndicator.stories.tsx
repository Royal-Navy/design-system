import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StyledProgressIndicator } from './partials/StyledProgressIndicator'
import { ProgressIndicator } from './index'

export default {
  component: ProgressIndicator,
  title: 'Progress Indicator',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof ProgressIndicator>

const Wrapper = styled.div`
  height: 10rem;

  ${StyledProgressIndicator} {
    position: absolute;
    transform: translate(-50%, -50%);
  }
`

export const Default: ComponentStory<typeof ProgressIndicator> = (props) => (
  <Wrapper>
    <ProgressIndicator {...props} />
  </Wrapper>
)
