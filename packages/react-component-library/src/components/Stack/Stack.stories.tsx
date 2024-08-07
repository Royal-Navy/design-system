import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { Stack } from '.'
import { Button } from '../Button'

export default {
  component: Stack,
  title: 'Utility/Stack',
  parameters: {
    docs: {
      description: {
        component:
          'Stack is a vertical flex container. If you need a horizontal flex container, use Group component instead.',
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
  },
} as Meta<typeof Stack>

export const Default: StoryFn<typeof Stack> = ({ children: _, ...rest }) => (
  <Stack {...rest}>
    <Button variant="primary">1</Button>
    <Button variant="primary">2</Button>
    <Button variant="primary">3</Button>
  </Stack>
)

Default.args = {
  gap: '10',
  align: 'stretch',
  justify: 'center',
}
