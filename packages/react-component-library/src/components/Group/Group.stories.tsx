import React from 'react'
import styled from 'styled-components'
import { Meta, StoryFn } from '@storybook/react'

import { Group } from '.'
import { Button } from '../Button'

export default {
  component: Group,
  title: 'Utility/Group',
  parameters: {
    docs: {
      description: {
        component:
          'Group is a horizontal flex container. If you need a vertical flex container, use Stack component instead.',
      },
    },
  },
  argTypes: {
    gap: {
      options: [
        ...Array.from({ length: 21 }, (_, i) => i.toString()),
        'px',
        'half',
        'full',
      ],
    },
    justify: {
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    align: {
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
    },
    wrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
  },
} as Meta<typeof Group>

export const Default: StoryFn<typeof Group> = ({ children: _, ...rest }) => (
  <Group {...rest}>
    <Button variant="primary">1</Button>
    <Button variant="primary">2</Button>
    <Button variant="primary">3</Button>
  </Group>
)

Default.args = {
  gap: '10',
  justify: 'flex-start',
  grow: false,
}

const StyledButton = styled(Button)`
  overflow: hidden;
`

const StyledP = styled.p`
  margin: 1rem 0;
`

export const PreventGrowOverflow: StoryFn<typeof Group> = (_props) => (
  <div>
    <StyledP>
      preventGrowOverflow: <b>true</b> – each child width is always limited to
      33% of parent width (since there are 3 children)
    </StyledP>

    <Group grow wrap="nowrap" gap="10">
      <Button variant="primary">First button</Button>
      <StyledButton variant="primary">
        Second button with large content
      </StyledButton>
      <Button variant="primary">Third button</Button>
    </Group>

    <StyledP>
      preventGrowOverflow: <b>false</b> – children will grow based on their
      content, they can take more than 33% of parent width
    </StyledP>

    <Group grow preventGrowOverflow={false} wrap="nowrap" gap="10">
      <Button variant="primary">First button</Button>
      <Button variant="primary">Second button with large content</Button>
      <Button variant="primary">Third button</Button>
    </Group>
  </div>
)

PreventGrowOverflow.storyName = 'preventGrowOverflow'
PreventGrowOverflow.parameters = {
  docs: {
    description: {
      story:
        'preventGrowOverflow prop allows you to control how Group children should behave when there is not enough space to fit them all on one line. By default, children are not allowed to take more space than (1 / children.length) * 100% of parent width (preventGrowOverflow is set to true). To change this behavior, set preventGrowOverflow to false and children will be allowed to grow and take as much space as they need.',
    },
  },
}
