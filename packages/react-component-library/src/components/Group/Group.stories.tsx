import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { Group } from '.'
import { Button } from '../Button'
import { getSpacings } from '../../tokens/utils'

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
      options: [...getSpacings(), 'px', 'half', 'full'],
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
    grow: {
      control: 'boolean',
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
